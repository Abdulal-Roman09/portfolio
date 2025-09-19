"use client";

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="group border-2 px-6 py-3 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:border-blue-400 transform hover:scale-105 flex items-center justify-center"
    >
      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
      Go Back
    </button>
  );
}
