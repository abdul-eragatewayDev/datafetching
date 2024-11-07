import React from "react";

export default function CTASection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-blue-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
      <a
        href="#signup"
        className="bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600"
      >
        Join for Free
      </a>
    </section>
  );
}
