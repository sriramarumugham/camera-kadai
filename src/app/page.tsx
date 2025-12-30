"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/rolls-film-near-camera.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Background with fade-in */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: "url('/rolls-film-near-camera.jpg')",
          opacity: loaded ? 1 : 0,
        }}
      />

      {/* Text with fade-in */}
      <h1
        className={`relative z-10 text-7xl lg:text-[10rem] font-semibold tracking-wide px-6 py-3 transition-all duration-1000 ease-in-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          color: "#c0392b",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
        }}
      >
        camera kadai
      </h1>
    </main>
  );
}
