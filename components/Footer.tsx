import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png"; // Adjust path based on your structure

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="FitZone" width={36} height={36} />
            <span className="text-xl font-bold text-gray-800">FitNess App</span>
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Your premier destination for fitness excellence. Transform your body and mind with our
            state-of-the-art equipment and expert trainers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/classes" className="hover:underline">Classes</Link>
            </li>
            <li>
              <Link href="/trainers" className="hover:underline">Trainers</Link>
            </li>
            <li>
              <Link href="/membership" className="hover:underline">Membership</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Nutrition Coaching</li>
            <li>Supplements</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li>123 Fitness Street</li>
            <li>Gym City, GC 12345</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@fitzone.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © 2024 FitZone. All rights reserved.
      </div>
    </footer>
  );
}
