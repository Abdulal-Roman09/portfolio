"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
          toast.success(
            "✅ Message Sent. Your message has been delivered successfully!"
          );
          form.current.reset();
        },
        (error) => {
          toast.error(
            "❌ Failed to Send. Something went wrong. Please try again later."
          );
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-background text-foreground dark:bg-gray-900 dark:text-foreground">
      <div className="md:h-screen flex items-center w-screen">
        <div className="container mx-auto py-20 md:py-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div className="space-y-8 px-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Contact Me
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Open to any adventure that involves learning and making cool
                  stuff!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-foreground dark:text-foreground">
                    abdulal.roman09@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-foreground dark:text-foreground font-bold">
                      in
                    </span>
                  </div>
                  <span className="text-foreground dark:text-foreground">
                    https://www.linkedin.com/in/abdul-al-roman09/
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-foreground dark:text-foreground">
                    Comilla, Chattogram, Bangladesh
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Abdulal-Roman09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:abdulal.roman09@gmail.com"
                  className="w-12 h-12 rounded-full border border-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-al-roman09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="px-4">
              <Card className="shadow-2xl border-0 bg-card/80 dark:bg-card/90 backdrop-blur-sm">
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
                      className="bg-input border-muted focus:border-primary dark:bg-input dark:border-muted dark:focus:border-primary"
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
                      className="bg-input border-muted focus:border-primary dark:bg-input dark:border-muted dark:focus:border-primary"
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
                      className="bg-input border-muted focus:border-primary dark:bg-input dark:border-muted dark:focus:border-primary"
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
                      className="bg-input border-muted focus:border-primary resize-none dark:bg-input dark:border-muted dark:focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full dark:bg-blue-500 text-primary-foreground hover:bg-primary/90 py-6 text-lg font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
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
