import React from "react";
import { Search, Zap } from "lucide-react";
import HomeButton from "@/components/HomeButton";
import BackButton from "@/components/BackButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg text-center relative z-10 border-2 shadow-2xl bg-white/80 rounded-2xl">
        <div className="pt-8 pb-8">
          <div className="mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Search
                className="w-32 h-32 text-gray-400/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-pulse">
                404
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-blue-400 animate-bounce" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Oops! Page Not Found
                </h2>
                <Zap className="w-6 h-6 text-pink-400 animate-bounce delay-150" />
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-lg text-gray-600 leading-relaxed">
              The page you&apos;re looking for seems to have vanished into the digital void.
            </p>
            <p className="text-sm text-gray-500">
              Don&apos;t worry though &mdash; let&apos;s get you back on track!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HomeButton />
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
}
