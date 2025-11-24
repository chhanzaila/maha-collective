"use client";
import React from "react";

interface MembershipButtonProps {
  title: string;
  price: string;
  description: string;
  stripeLink: string;
}

export default function MembershipButton({ title, price, description, stripeLink }: MembershipButtonProps) {
  return (
    <button
      onClick={() => window.location.href = stripeLink}
      className="bg-white text-sun p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 w-full"
    >
      <h2 className="font-bold text-xl mb-3">{title}</h2> {/* slightly larger */}
      <p className="text-orange-500 text-2xl mb-2">{price}</p> {/* larger */}
      <p className="text-base">{description}</p> {/* slightly larger */}
    </button>
  );
}
