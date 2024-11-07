import React from "react";

export default function Testemonials() {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 text-center text-[#1E3A8A]">
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
  );
}
