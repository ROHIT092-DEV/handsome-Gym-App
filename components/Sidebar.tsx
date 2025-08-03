"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "User Management", href: "/admin/users" },
  { name: "Product Management", href: "/admin/products" },
];

export default function Sidebar({
  isOpen = false,
  onClose = () => {},
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white shadow-lg sticky top-0 h-screen hidden md:block z-30">
        <div className="p-6 font-bold text-lg border-b">Admin Panel</div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`px-6 py-3 hover:bg-gray-100 cursor-pointer ${
                  pathname === item.href ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-white h-full shadow-lg p-6 relative z-50">
            <button className="absolute top-4 right-4" onClick={onClose}>
              <X />
            </button>
            <h2 className="text-lg font-bold border-b pb-4 mb-4">Admin Panel</h2>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={onClose}>
                  <div
                    className={`px-4 py-2 rounded hover:bg-gray-100 ${
                      pathname === item.href ? "bg-gray-200 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
          {/* Backdrop */}
          <div
            className="flex-1 bg-black opacity-30"
            onClick={onClose}
          ></div>
        </div>
      )}
    </>
  );
}
