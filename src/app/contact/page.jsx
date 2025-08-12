"use client";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbceutp",
        "template_vuacg79",
        form.current,
        "-RJUnEk1m6gNL_M10"
      )
      .then(
        () => {
          toast.success("✅ Message Sent. Your message has been delivered successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to Send. Something went wrong. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-gray-100">
      <div className="h-screen flex items-center w-screen">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Contact Me
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Open to any adventure that involves learning and making cool stuff!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">
                    abdulal.roman09@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <span className="text-lg text-slate-700">
                    https://www.linkedin.com/in/abdul-al-roman09/
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">
                    Cumilla, Chattgong, Bangladesh
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 rounded-full border-slate-300 hover:bg-slate-900 hover:text-white bg-transparent"
                >
                  <a
                    href="https://github.com/Abdulal-Roman09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 rounded-full border-slate-300 hover:bg-slate-900 hover:text-white bg-transparent"
                >
                  <a
                    href="mailto:abdulal.roman09@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 rounded-full border-slate-300 hover:bg-slate-900 hover:text-white bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/abdul-al-roman09/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form ref={form} onSubmit={sendEmail}>
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="sr-only">Contact Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="user_name"
                      placeholder="Your name"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Your subject"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-slate-50 border-slate-200 focus:border-slate-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
