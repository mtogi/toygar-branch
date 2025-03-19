"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/"); // Redirect to dashboard after successful login
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { callbackUrl: "/" }); // Redirect to dashboard after Google login
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-gray-900 lg:text-3xl text-2xl font-bold mb-8">
          Sign in
        </h3>

        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleEmailLogin}>
          <div>
            <label className="text-sm text-gray-800 font-medium mb-2 block">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-blue-600 focus:bg-white"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-800 font-medium mb-2 block">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-blue-600 focus:bg-white"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full shadow-md py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="my-6 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-gray-800 text-center">or</p>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="space-x-6 flex justify-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full shadow-md py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Log in with Google
          </button>
        </div>

        <p className="text-sm mt-12 text-gray-600 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline ml-1"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
