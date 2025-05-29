"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ShimmerButton from "@/components/ui/shimmer-button"
import { useEffect, useRef } from "react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState("");
  const notificationTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current as NodeJS.Timeout);
      }
    };
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSending(true);
    setNotification("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setNotification("Email sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setNotification("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setNotification("Failed to send email. Please try again.");
    } finally {
      setSending(false);
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current);
      }
      notificationTimeout.current = setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of satisfied users who have already transformed their workflow with Moskal.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Email us</div>
                <a href="mailto:info@moskal.id" className="text-blue-600 hover:text-blue-700 transition-colors">
                  info@moskal.id
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Visit us</div>
                <div className="text-gray-800 text-sm">Jakarta Selatan, Indonesia</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-600/20 rounded-xl"
          >
            <div className="bg-white p-8 rounded-xl border border-gray-200 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Contact Us</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-600">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="bg-gray-100 border-gray-300 focus:border-blue-600 h-12"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-600">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-100 border-gray-300 focus:border-blue-600 h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-600">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="bg-gray-100 border-gray-300 focus:border-blue-600 h-12"
                    value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-600">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <ShimmerButton
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 h-12 text-base"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  shimmerDuration="2s"
                  borderRadius="8px"
                  background="linear-gradient(to right, #2563eb, #1d4ed8)"
                >
                  {sending ? "Sending..." : "Send Message"}
                </ShimmerButton>
                {notification && (
                  <p className="text-green-500 text-center animate-fade-in-down">
                    {notification}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const fadeIn = {
  initial: { opacity: 0, translateY: -10 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 10 },
};
