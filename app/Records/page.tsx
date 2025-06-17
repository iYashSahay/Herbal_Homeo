"use client";
import React, { useState, useEffect } from "react";

export default function RecordsPage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-green-950 to-gray-800"
          : "bg-gradient-to-br from-green-50 via-green-100 to-white"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-8 py-4 shadow-xl border-b-2
          ${dark
            ? "bg-gradient-to-r from-gray-900 via-green-900 to-gray-800 border-green-800"
            : "bg-gradient-to-r from-green-200 via-white to-green-100 border-green-300"}
          rounded-b-2xl relative z-20
        `}
      >
        <a href="/" className="flex items-center gap-3 group transition">
          <span className="relative">
            <img
              src="/image.jpg"
              alt="Logo"
              className="h-14 w-14 rounded-2xl shadow-xl border-4 border-green-400 object-cover bg-white group-hover:scale-105 transition-transform duration-200"
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-green-300 rounded-full blur-md opacity-60 group-hover:opacity-80"></span>
          </span>
          <span
            className={`text-3xl font-extrabold tracking-wide drop-shadow-lg select-none font-serif uppercase ${
              dark ? "text-green-300" : "text-green-700"
            } group-hover:text-green-600 transition-colors`}
          >
            Herbal Homoeo
          </span>
        </a>
        <div className="flex gap-8 items-center">
          <a
            href="/"
            className={`font-semibold px-5 py-2 rounded-xl transition duration-200 shadow-sm ${
              dark
                ? "text-green-200 hover:text-green-400 hover:bg-gray-800"
                : "text-green-700 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"
            }`}
          >
            Home
          </a>
          <a
            href="/message"
            className={`font-semibold px-5 py-2 rounded-xl transition duration-200 shadow-sm ${
              dark
                ? "text-green-200 hover:text-green-400 hover:bg-gray-800"
                : "text-green-700 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"
            }`}
          >
            Message
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className={`ml-4 px-5 py-2 rounded-xl border-2 font-bold shadow transition ${
              dark
                ? "bg-gray-800 border-green-500 text-green-200 hover:bg-gray-700"
                : "bg-gradient-to-r from-green-100 to-green-200 border-green-400 text-green-700 hover:from-green-200 hover:to-green-300"
            }`}
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>

      {/* Search Form */}
      <main className="flex flex-col items-center justify-start py-12 px-6 md:px-12">
        <h1
          className={`text-3xl font-bold mb-6 ${
            dark ? "text-green-200" : "text-green-800"
          }`}
        >
          Search Records
        </h1>
        <form className="w-full max-w-xl space-y-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition ${
              dark
                ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
            }`}
          />
          <input
            type="text"
            placeholder="Registration Number"
            className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition ${
              dark
                ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
            }`}
          />
          <button
            type="submit"
            className={`w-full py-3 font-bold rounded-lg shadow-md transition ${
              dark
                ? "bg-gradient-to-r from-green-700 to-green-900 text-green-100 hover:from-green-800 hover:to-green-950"
                : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
            }`}
          >
            Search
          </button>
        </form>

        {/* Results */}
        <div className="mt-10 w-full max-w-2xl space-y-6">
          {/* Replace with mapped records later */}
          <div
            className={`p-6 rounded-xl shadow-lg border ${
              dark
                ? "bg-gray-800 border-green-700 text-green-100"
                : "bg-white border-green-200 text-green-900"
            }`}
          >
            <h3 className="text-xl font-semibold">No Records Found</h3>
            {/* Sample record structure (to be generated dynamically) */}
            {/*
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Phone:</strong> 1234567890</p>
            <p><strong>Reg. No:</strong> REG2024001</p>
            <p><strong>Complaint:</strong> Headache</p>
            <p><strong>Medicine:</strong> Nux Vomica</p>
            */}
          </div>
        </div>
      </main>
    </div>
  );
}
