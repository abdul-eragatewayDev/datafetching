import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-blue-900 text-white h-dvh flex flex-col justify-center items-center text-center px-5 animate-appear">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Accessible Education for Every South African Student
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Learn anytime, anywhere, with curriculum-aligned resources.
      </p>
      <a
        href="#features"
        className="bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600"
      >
        Get Started
      </a>
    </section>
  );
}
