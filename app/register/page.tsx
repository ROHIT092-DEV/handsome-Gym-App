"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


function Register() {
  const [firstName, setSFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validations
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !dob ||
      !address ||
      !phoneNumber
    ) {
      return setError("All fields are required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return setError("Phone number must be 10 digits");
    }

    setError(""); // Clear errors
    setLoading(true);

    // Simulate API call

    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          address,
          phoneNumber,
          dob,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registered successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-center py-4">
        Lets Register to Begin our journey
      </h1>

      <form onSubmit={handleRegisterSubmit} className="px-2 gap-4 md:max-w-3xl mx-auto">
        <div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          >
            FirstName
          </label>
          <Input
            type="text"
            id="firstname"
            name="firstname"
            required
            onChange={(e) => setSFirstName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            LastName
          </label>
          <Input
            type="text"
            id="lastname"
            name="lastname"
            required
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
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

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="adress"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <Input
            type="text"
            id="adress"
            name="adress"
            required
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            required
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // remove non-digit
              if (value.length <= 10) {
                SetPhoneNumber(value);
              }
            }}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            DOB
          </label>
          <Input
            type="date"
            id="dob"
            name="dob"
            required
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {error && (
          <div className="mt-3 p-3 rounded-md bg-red-100 border border-red-300">
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        )}

        <Button className="mt-4 w-full">
          {loading ? "Loading..." : "Register"}
        </Button>
      </form>
    </div>
  );
}

export default Register;
