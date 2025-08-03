"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroBottom = () => {
  return (
    <section className="bg-red-600 text-white py-20 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Ready to Start Your Fitness Journey?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join thousands of members who have transformed their lives at FitZone. <br />
          Your best self is waiting.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-lg font-semibold shadow-md">
            Join Now - Free Trial <Star className="ml-2 w-4 h-4" />
          </Button>

          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-red-600 px-6 py-3 text-lg font-semibold">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBottom;
