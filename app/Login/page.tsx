"use client";
import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const [dark, setDark] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
    // login logic here
    alert("Logged in (mock)");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-12 transition-colors duration-300 relative overflow-hidden ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-green-950 to-gray-800"
          : "bg-gradient-to-br from-green-50 via-green-100 to-white"
      }`}
    >
      {/* Decorative background shapes */}
      {!dark && (
        <>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-300 via-green-200 to-green-100 rounded-full blur-2xl opacity-40 z-0"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-green-200 via-green-100 to-green-50 rounded-full blur-2xl opacity-30 z-0"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-30 z-0 -translate-x-1/2 -translate-y-1/2"></div>
        </>
      )}
      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle,_1px,_#334155_60%,_transparent_100%)] opacity-30 z-0" style={{backgroundSize: "18px 18px"}}></div>
      )}

      <div
        className={`w-full max-w-md rounded-3xl shadow-2xl border-2 p-10 space-y-8 relative z-10 ${
          dark
            ? "bg-gradient-to-br from-gray-900 via-green-950 to-gray-800 border-green-800"
            : "bg-white/90 border-green-300 backdrop-blur-lg"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <img
            src="/image.jpg"
            alt="Logo"
            className="h-16 w-16 rounded-2xl shadow-lg border-4 border-green-400 object-cover bg-white mb-2"
          />
          <h2
            className={`text-3xl font-extrabold text-center font-serif uppercase tracking-wider ${
              dark ? "text-green-100" : "text-green-700"
            }`}
          >
            Herbal Homoeo
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              className={`block text-sm font-semibold mb-1 ${
                dark ? "text-green-200" : "text-green-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none text-base shadow-sm ${
                dark
                  ? "bg-gray-800 border-green-700 text-green-100 focus:ring-2 focus:ring-green-500"
                  : "bg-green-50 border-green-300 text-green-800 focus:ring-2 focus:ring-green-400"
              }`}
              required
            />
          </div>

          <div>
            <label
              className={`block text-sm font-semibold mb-1 ${
                dark ? "text-green-200" : "text-green-700"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none text-base shadow-sm ${
                  dark
                    ? "bg-gray-800 border-green-700 text-green-100 focus:ring-2 focus:ring-green-500"
                    : "bg-green-50 border-green-300 text-green-800 focus:ring-2 focus:ring-green-400"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-green-400 hover:text-green-600 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Eye Open SVG
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  // Eye Closed SVG
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m1.414-1.414A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.293 5.95M15 12a3 3 0 11-6 0 3 3 0 016 0zm-6.364 6.364L6 18m12-12l-1.636 1.636" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 mt-4 rounded-xl font-bold text-lg shadow-lg transition
              ${
                dark
                  ? "bg-gradient-to-r from-green-700 to-green-900 text-green-100 hover:from-green-800 hover:to-green-950"
                  : "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:from-green-500 hover:to-green-700"
              }`}
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center pt-4">
          <p className={`text-sm ${dark ? "text-green-300" : "text-green-700"}`}>
            Don't have an account?{" "}
            <a
              href="/register"
              className="underline cursor-pointer hover:text-green-500 transition"
            >
              Register
            </a>
          </p>
          <button
            onClick={() => setDark(!dark)}
            className={`text-xs px-3 py-1 rounded-xl font-semibold border transition ${
              dark
                ? "bg-gray-800 text-green-200 border-green-600"
                : "bg-green-100 text-green-700 border-green-400"
            }`}
            type="button"
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </div>
  );
}
