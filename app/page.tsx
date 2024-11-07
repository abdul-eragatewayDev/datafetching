// pages/index.js
import React from "react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white h-screen flex flex-col justify-center items-center text-center px-4">
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

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-4 md:px-12 bg-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Live Tutoring</h3>
            <p>One-on-one sessions with expert tutors in real-time.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Interactive Quizzes</h3>
            <p>Practice tests and quizzes tailored to your level.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Resource Library</h3>
            <p>Access study materials, past papers, and notes.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <p className="text-lg mb-6">
          Our platform is designed for South African students, with
          curriculum-aligned content and a focus on accessibility.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p>
              "This platform helped me excel in my exams! The resources are just
              what I needed."
            </p>
            <p className="mt-4 font-semibold">– Student</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p>
              "Our school saw tremendous improvements in grades after using this
              platform."
            </p>
            <p className="mt-4 font-semibold">– Teacher</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-12 bg-blue-900 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <a
          href="#signup"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600"
        >
          Join for Free
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Your Platform Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
