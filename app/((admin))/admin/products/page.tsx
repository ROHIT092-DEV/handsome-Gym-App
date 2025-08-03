"use client";
import { useState } from "react";

export default function ProductManagement() {
  const [products] = useState([
    { name: "Protein Powder", price: 1200 },
    { name: "Yoga Mat", price: 600 },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Management</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Create Product
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-3">{product.name}</td>
                <td className="p-3">₹{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
