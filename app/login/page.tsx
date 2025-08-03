"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmitLoginFunction = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading
    // console.log(email, password);

    try {
      const loginResponse = await fetch(
        `${baseUrl}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!loginResponse.ok) {
        const errorData = await loginResponse.json();
        setError(errorData.message || "Login failed");
        setLoading(false);
        return;
      }

      const data = await loginResponse.json();
      // console.log("Login successful:", data);
      // alert("Login successful");
      setLoading(false); // ✅ Stop loading
      // Redirect or perform any other actions after successful login
      login(data.token, data.user); // Save in context + cookie
      router.push("/");
    } catch (error) {
      alert(`Login error ${error}`);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center items-center py-8 font-bold break-words">
        Welcome to our FitNess Training Session
      </h1>

      <div className="px-2 md:max-w-3xl mx-auto py-4">
        {error && (
        <div className="mt-3 p-3 rounded-md bg-red-100 border border-red-300">
          <p className="text-red-700 text-sm font-medium">{error}</p>
        </div>
      )}
      </div>

      <div className=" px-2 gap-4 md:max-w-3xl mx-auto">
        <form className="" onSubmit={handleSubmitLoginFunction}>
          {/* EMail Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>

            <Input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <Input
              type="text"
              id="email"
              name="email"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button className="mt-4" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>

          <div className="py-4 italic">
            <span>Create an Account if do not have any </span>
            <Link href="/register">
              <Button type="button" variant={"outline"}>
                Register
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
