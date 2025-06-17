"use client";
import React, { useState, useEffect } from "react";

export default function LgPage() {
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
      {/* Decorative BG behind form */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        {!dark ? (
          // Light mode: subtle pattern + gradient
          <>
            <div
              className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-repeat opacity-20"
              style={{ zIndex: 1 }}
            />
            <svg
              width="700"
              height="700"
              viewBox="0 0 700 700"
              fill="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 opacity-40"
              style={{ zIndex: 2 }}
            >
              <ellipse
                cx="350"
                cy="350"
                rx="320"
                ry="220"
                fill="url(#leafGradient)"
              />
              <defs>
                <radialGradient
                  id="leafGradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="translate(350 350) scale(320 220)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#bbf7d0" />
                  <stop offset="0.5" stopColor="#86efac" />
                  <stop offset="1" stopColor="#f0fdf4" />
                </radialGradient>
              </defs>
            </svg>
          </>
        ) : (
          <div
            className="rounded-full blur-3xl opacity-60 bg-gradient-to-br from-green-900 via-green-700 to-green-800 w-[600px] h-[600px]"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              zIndex: 1,
            }}
          ></div>
        )}
      </div>

      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-8 py-4 shadow-xl border-b-2
          ${dark
            ? "bg-gradient-to-r from-gray-900 via-green-900 to-gray-800 border-green-800"
            : "bg-gradient-to-r from-green-200 via-white to-green-100 border-green-300"}
          rounded-b-2xl relative z-20
        `}
        style={{
          minHeight: "80px",
          letterSpacing: "0.03em",
          boxShadow: dark
            ? "0 4px 24px 0 rgba(16, 185, 129, 0.15)"
            : "0 8px 32px 0 rgba(34,197,94,0.10)",
        }}
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
            href="records.html"
            className={`font-semibold px-5 py-2 rounded-xl transition duration-200 shadow-sm
              ${dark
                ? "text-green-200 hover:text-green-400 hover:bg-gray-800"
                : "text-green-700 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"}
            `}
          >
            Records
          </a>
          <a
            href="message.html"
            className={`font-semibold px-5 py-2 rounded-xl transition duration-200 shadow-sm
              ${dark
                ? "text-green-200 hover:text-green-400 hover:bg-gray-800"
                : "text-green-700 hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"}
            `}
          >
            Message
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className={`ml-4 px-5 py-2 rounded-xl border-2 font-bold shadow transition
              ${dark
                ? "bg-gray-800 border-green-500 text-green-200 hover:bg-gray-700"
                : "bg-gradient-to-r from-green-100 to-green-200 border-green-400 text-green-700 hover:from-green-200 hover:to-green-300"}
            `}
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>

      {/* Data Form */}
      <main className="flex flex-col items-center justify-center py-10 relative z-10">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-8 text-center drop-shadow-lg ${
            dark ? "text-green-200" : "text-green-800"
          }`}
        >
          Herbal Homoeo
        </h1>
        <form
          action="#"
          method="POST"
          className={`relative rounded-3xl shadow-2xl p-10 w-full max-w-xl space-y-6 border
            ${
              dark
                ? "bg-gradient-to-br from-gray-900 via-green-950 to-gray-800 border-green-900 backdrop-blur-lg"
                : "bg-white/90 border-green-200 backdrop-blur-lg"
            }
          `}
          style={{
            zIndex: 2,
            boxShadow: dark
              ? "0 8px 40px 0 rgba(16, 185, 129, 0.25)"
              : "0 8px 48px 0 rgba(34,197,94,0.13)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
                Name:
              </label>
              <input
                type="text"
                name="name"
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                  ${
                    dark
                      ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                      : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                  }
                `}
              />
            </div>
            <div>
              <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
                Age:
              </label>
              <input
                type="number"
                name="age"
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                  ${
                    dark
                      ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                      : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                  }
                `}
              />
            </div>
            <div>
              <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
                Sex:
              </label>
              <select
                name="sex"
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                  ${
                    dark
                      ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                      : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                  }
                `}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
                Date:
              </label>
              <input
                type="date"
                name="date"
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                  ${
                    dark
                      ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                      : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                  }
                `}
              />
            </div>
            <div>
              <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
                Registration Number:
              </label>
              <input
                type="text"
                name="registration"
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                  ${
                    dark
                      ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                      : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                  }
                `}
              />
            </div>
            <div>
              <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                required
                className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                  ${
                    dark
                      ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                      : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                  }
                `}
              />
            </div>
          </div>

          <div>
            <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
              Complaint:
            </label>
            <textarea
              name="complaint"
              rows={3}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition resize-none
                ${
                  dark
                    ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                    : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                }
              `}
            ></textarea>
          </div>

          <div>
            <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
              Medicine:
            </label>
            <textarea
              name="medicine"
              rows={3}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition resize-none
                ${
                  dark
                    ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                    : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                }
              `}
            ></textarea>
          </div>

          <div>
            <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
              Other Info:
            </label>
            <textarea
              name="other"
              rows={2}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition resize-none
                ${
                  dark
                    ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                    : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                }
              `}
            ></textarea>
          </div>

          <div>
            <label className={`block font-semibold mb-1 ${dark ? "text-green-200" : "text-green-900"}`}>
              Address:
            </label>
            <input
              type="text"
              name="address"
              required
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 outline-none transition
                ${
                  dark
                    ? "bg-gray-800 border-green-700 text-green-100 focus:ring-green-500"
                    : "bg-green-50 border-green-300 text-green-900 focus:ring-green-400 shadow-sm"
                }
              `}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 mt-2 font-bold rounded-lg shadow-lg transition text-lg tracking-wide
              ${
                dark
                  ? "bg-gradient-to-r from-green-700 to-green-900 text-green-100 hover:from-green-800 hover:to-green-950"
                  : "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:from-green-500 hover:to-green-700 shadow-xl"
              }
            `}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}