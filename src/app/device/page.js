"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <h1>Raspberry-Pi main page</h1>
    </div>
  );
}
