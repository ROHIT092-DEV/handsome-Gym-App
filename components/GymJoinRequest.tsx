"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import owner from "@/images/owner.jpg";
import { useAuth } from "@/context/AuthContext";
import { div } from "framer-motion/client";

function GymJoinRequest() {
  const { user } = useAuth();

  return (
    <div className="">
      <div className="bg-amber-300 max-w-7xl mx-auto  py-4">
        {user ? (
          
         <div className="w-full bg-yellow-300 py-10 px-4">
  <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center md:items-start text-center md:text-left rounded-xl bg-white shadow-lg px-6 md:px-12 py-10 space-y-6">
    
    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
      👋 Welcome Back,{" "}
      <span className="text-red-600">{user.firstName || "User"}</span>!
    </h1>

    <p className="text-lg lg:text-xl text-gray-700 max-w-2xl">
      Let’s continue building your fitness journey together. Stay strong 💪 and stay motivated!
    </p>

    <Link href="/admin" className="w-full sm:w-auto">
      <Button className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 text-lg rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
        Go to Dashboard
      </Button>
    </Link>
  </div>
</div>

        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="  text-card-foreground p-6  mx ">
              <h1 className="font-bold text-2xl my-2 ">
                Hey! Are you ready with me to make your new healthy journey
              </h1>

              <h3 className="font-medium my-2">
                Contact me on the given details or fill your details by clicking
                on join Button
              </h3>

              <Link href="/join-request">
                <Button className="my-6 cursor-pointer">
                  Send Join Request
                </Button>
              </Link>
            </div>

            <div>
              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 text-center space-y-4 hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={owner} // ✅ Replace with actual image path
                  alt="Rohit Patel"
                  className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
                />

                <h2 className="text-xl font-bold text-gray-800">Rohit Patel</h2>
                <p className="text-sm text-gray-500">
                  Certified! Fitness Coach
                </p>

                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <span className="font-medium">📞 Phone:</span> +91
                    7071853247
                  </p>
                  <p>
                    <span className="font-medium">📧 Email:</span>
                    prohit.2914@gmail.com
                  </p>
                  <p>
                    <span className="font-medium">📍 Location:</span>Barahi Kala
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GymJoinRequest;
