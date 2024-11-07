import React from "react";

export default function KeyFeatures() {
  return (
    <section
      id="features"
      className="py-16 px-4 md:px-12 text-[#1E3A8A] bg-gray-50 text-center"
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
  );
}
