"use client";

import { useState } from "react";
import { UsersIcon, PackageIcon } from "lucide-react";
import UserManagement from "@/components/UserManagement";
import ProductManagement from "@/components/ProductManagement";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64   p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

        <button
          onClick={() => setActiveTab("users")}
          className={`flex items-center gap-3 w-full px-4 py-2 rounded-md text-left ${
            activeTab === "users" ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          <UsersIcon className="w-5 h-5" />
          Users
        </button>

        <button
          onClick={() => setActiveTab("products")}
          className={`flex items-center gap-3 w-full px-4 py-2 rounded-md text-left ${
            activeTab === "products" ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          <PackageIcon className="w-5 h-5" />
          Products
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === "users" && <UserManagement />}
        {activeTab === "products" && <ProductManagement />}
      </main>
    </div>
  );
}

