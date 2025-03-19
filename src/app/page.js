"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  console.log("session: ", session);
  console.log("status: ", status);

  if (status === "loading") return <p>Loading session...</p>;

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user.name}!</h1>
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>You are not signed in.</h1>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}
    </div>
  );
}
