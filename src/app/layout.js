"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import ScrollToTopButton from "@/components/scrolltotopbutton/ScrollToTopButton";
import IntroAnimation from "@/components/introanimation/introanimation";
import { metadata } from "./metadata"; // Import metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace with your actual loading logic
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {isLoading ? (
            <IntroAnimation onFinish={() => setIsLoading(false)} />
          ) : (
            <>
              <Navbar />
              {children}
              <SpeedInsights />
              <Analytics />
              <ScrollToTopButton/>
              <Footer />
            </>
          )}
        </div>
      </body>
    </html>
  );
}
