// pages/index.js
import React from "react";
import Image from "next/image";
import logo from "../public/images/academeo_cropped.jpg";
import HeroSection from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import WhyUs from "./components/WhyUs";
import Testemonials from "./components/Testemonials";
import CTASection from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <KeyFeatures />

      {/* Why Choose Us Section */}
      <WhyUs />

      {/* Testimonials Section */}
      <Testemonials />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
