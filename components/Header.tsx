"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { Button } from "./ui/button";
import { Dumbbell } from "lucide-react";

function Header() {
  const { user, token, logout } = useAuth();

  return (
    <div className="border-b">
      <div className="flex flex-col items-center gap-4 p-4 lg:flex-row lg:justify-between max-w-7xl mx-auto">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link href="/" className="shrink-0 font-bold">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-6 h-6 text-red-600" />
              <span className="text-2xl font-extrabold text-gray-800 tracking-wide">
                Fitness
              </span>
            </div>
          </Link>

          {/* Phone View */}

          <div className="lg:hidden">
            {user ? (
              <div className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="uppercase font-semibold text-gray-700 tracking-wide">
                    <span className="font-bold text-xs hidden md:inline-block">
                      Logged in AS
                    </span>
                    {user.firstName}
                  </div>
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition">
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4">
          {/* <Link
            href={"/"}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded shadow-sm transition"
          >
            <button>Home</button>
          </Link> */}

          {/* <Link
            href={"/product"}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded shadow-sm transition"
          >
            <button>Product</button>
          </Link> */}

          <div>
            {user && (
              <div>
                {user.role === "admin" ? (
                  <Link href="/admin">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded shadow-sm transition">
                      Admin Dashboard
                    </Button>
                  </Link>
                ) : user.role === "trainer" ? (
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded shadow-sm transition">
                    Trainer Dashboard
                  </Button>
                ) : (
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded shadow-sm transition">
                    User Dashboard
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop  */}

        <div className="hidden lg:flex">
          {user ? (
            <div className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="uppercase font-semibold text-gray-700 tracking-wide">
                  <span className="font-bold text-sm">Logged in as</span>{" "}
                  {user.firstName}
                </div>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Link href="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
