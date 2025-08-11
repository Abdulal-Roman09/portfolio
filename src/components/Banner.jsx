"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <>
      <div className="bg-[url('https://aakash-sharma.netlify.app/static/media/cloudBg.f28b5c6961fd82be839c.png')]">
        <section className="flex flex-col md:flex-row items-center justify-between container mx-auto px-6   gap-10 h-screen ">
          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="text-blue-500">Abdul Al Roman</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              I'm a{" "}
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={[
                    "React Developer",
                    "Full Stack Developer",
                    "MERN Stack Engineer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="max-w-xl text-gray-600 dark:text-gray-400 text-lg">
              I’m passionate about building scalable web applications that
              improve user experiences and solve real-world problems. Ambitious
              to keep learning and growing as a developer every day.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <Image
              src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
              alt="Developer working"
              width={450}
              height={450}
              className=" object-contain"
              priority
            />
          </div>
        </section>
      </div>
    </>
  );
}
