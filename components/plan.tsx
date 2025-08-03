"use client";
import Image from "next/image";
import React from "react";

// ✅ Import local images

import plan1 from '@/images/plan1.jpg'
import plan2 from "@/images/plan2.jpg";
import plan3 from "@/images/plan3.jpg";
import plan4 from "@/images/plan4.jpg";
import plan5 from "@/images/plan5.jpg";
import plan6 from "@/images/plan6.jpg";

const plans = [
  {
    tag: "Most Popular",
    image: plan1,
    title: "Premium Membership",
    subtitle: "Access to all equipment, classes, and facilities",
    price: "$89",
    duration: "/month",
    features: [
      "Unlimited gym access",
      "All group classes",
      "Locker room",
      "Free WiFi",
    ],
  },
  {
    tag: "Best Value",
    image: plan2,
    title: "Personal Training",
    subtitle: "One-on-one sessions with certified trainers",
    price: "$120",
    duration: "/session",
    features: [
      "Personalized workout plan",
      "Nutrition guidance",
      "Progress tracking",
      "Flexible scheduling",
    ],
  },
  {
    tag: "",
    image: plan3,
    title: "Group Classes",
    subtitle: "High-energy group fitness classes",
    price: "$25",
    duration: "/class",
    features: ["HIIT workouts", "Yoga sessions", "Spin classes", "Strength training"],
  },
  {
    tag: "",
    image: plan4,
    title: "Nutrition Coaching",
    subtitle: "Expert nutritional guidance and meal planning",
    price: "$75",
    duration: "/month",
    features: ["Custom meal plans", "Supplement advice", "Weekly check-ins", "Recipe database"],
  },
  {
    tag: "",
    image: plan5,
    title: "Premium Supplements",
    subtitle: "High-quality supplements for optimal performance",
    price: "$45",
    duration: "/bottle",
    features: ["Protein powders", "Pre-workout", "Vitamins", "Recovery formulas"],
  },
  {
    tag: "Exclusive",
    image: plan6,
    title: "VIP Membership",
    subtitle: "Ultimate gym experience with exclusive perks",
    price: "$149",
    duration: "/month",
    features: [
      "24/7 access",
      "Guest privileges",
      "Personal locker",
      "Towel service",
      "Priority booking",
    ],
  },
];

export default function Plan() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Pick the membership that best suits your goals and lifestyle. No hidden fees. Cancel anytime.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 group overflow-hidden"
            >
              {/* Plan image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                {plan.tag && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {plan.tag}
                  </span>
                )}
              </div>

              {/* Plan content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{plan.subtitle}</p>

                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {plan.price}
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-300">{plan.duration}</span>
                </div>

                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
