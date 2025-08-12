import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TransitionPrivider from "@/components/TransitionPrivider";
import ToastProvider from "@/components/ToastProvider";
import SocialSidebar from "@/components/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Al Roman | Web Developer & Designer",
  description: "Portfolio of Abdul Al Roman – Passionate MERN Stack developer and creative designer. Showcasing projects, skills, and experience in modern web development.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TransitionPrivider>
          {children}
          <ToastProvider />
          <SocialSidebar/>
        </TransitionPrivider>
      </body>
    </html>
  );
}
