"use client";

import { Home } from "lucide-react";

export default function HomeButton() {
  return (
    <button
      onClick={() => (window.location.href = "/")}
      className="group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
    >
      <Home className="w-4 h-4 mr-2 group-hover:animate-bounce" />
      Take Me Home
    </button>
  );
}
