import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/user";
import { RaspberryPi } from "@/models/raspberryPi";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
    // Get the session from the request
    const session = await getServerSession(authOptions);

    // If the user is not authenticated, return an error
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Connect to the database
    await connectToDatabase();

    //   Get user object
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    //   Get user devices via user object
    const userDevices = await RaspberryPi.find({ userId: user }).select(
      "name serialId -_id"
    );

    // Return the registered devices as a response
    return NextResponse.json({
      userDevices: userDevices,
    });
  } catch (error) {
    console.error("Error during device retrieval:", error); // Log the error for debugging

    // Return a generic error response
    return NextResponse.json(
      { error: "An error occurred while fetching devices" },
      { status: 500 }
    );
  }
}
