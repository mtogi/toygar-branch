import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";
import connectToDatabase from "@/lib/mongodb";
import { User } from "@/models/user";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        await connectToDatabase();

        // Find user using Mongoose
        const user = await User.findOne({ email: credentials.email }).select(
          "+password"
        );

        if (!user) {
          throw new Error("User not found");
        }

        // Compare hashed password
        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Session expires after 30 days
    updateAge: 24 * 60 * 60, // Update session every 24 hours
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only handle Google sign-ins
      if (account.provider === "google") {
        await connectToDatabase();

        // Check if the user already exists in your database
        const existingUser = await User.findOne({ email: profile.email });

        if (!existingUser) {
          // Create a new user if they don't exist
          const newUser = new User({
            firstName: profile.given_name || profile.name.split(" ")[0],
            lastName: profile.family_name || profile.name.split(" ")[1] || "",
            email: profile.email,
            authProvider: "google",
            googleId: profile.sub,
          });

          await newUser.save();
        }
      }

      // Return true to allow the sign-in
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to the JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id; // Attach user ID to session
      }
      return session;
    },
  },
};

// Create NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
