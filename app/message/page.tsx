"use client";
import React, { useState, useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

export default function BulkMessagePage() {
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [isQuillLoaded, setIsQuillLoaded] = useState(false);
  const phoneNumbers = ["+919876543210", "+918765432109", "+911234567890"]; // Mocked

  // Use a ref to access the quill instance directly
  const quillRef = useRef<any>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined' && editorRef.current && !quillRef.current) {
      // Dynamically import and initialize Quill
      import('quill').then((QuillModule) => {
        const QuillClass = QuillModule.default;
        if (editorRef.current) {
          quillRef.current = new QuillClass(editorRef.current, {
            theme: 'snow',
            placeholder: 'Type in Hindi or English, add bold text, etc.',
            modules: {
              toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link'],
                ['clean']
              ],
            },
          });
        }

        // Listen for text changes
        quillRef.current.on('text-change', (delta: any, oldDelta: any, source: any) => {
          const text = quillRef.current?.getText() || '';
          setMessage(text);
        });

        setIsQuillLoaded(true);
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles(Array.from(e.target.files));
    }
  };

  const handleSend = () => {
    const content = quillRef.current?.getText() || '';
    if (!content.trim()) return alert("Please write a message first.");
    alert(
      `Sending message to ${phoneNumbers.length} users with ${mediaFiles.length} files with caption "${content}..."` 
    );
    // Send message and media to backend
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-green-950 to-gray-800"
          : "bg-gradient-to-br from-green-50 via-green-100 to-white"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-8 py-4 shadow-xl border-b-2
          ${
            dark
              ? "bg-gradient-to-r from-gray-900 via-green-900 to-gray-800 border-green-800"
              : "bg-gradient-to-r from-green-200 via-white to-green-100 border-green-300"
          }
          rounded-b-2xl relative z-20`}
      >
        <a href="/" className="flex items-center gap-3 group transition">
          <img
            src="/image.jpg"
            alt="Logo"
            className="h-14 w-14 rounded-2xl border-4 border-green-400 object-cover bg-white"
          />
          <span
            className={`text-3xl font-extrabold tracking-wide font-serif uppercase drop-shadow ${
              dark ? "text-green-300" : "text-green-700"
            }`}
          >
            Herbal Homoeo
          </span>
        </a>
        <div className="flex gap-6 items-center">
          <a
            href="/records"
            className={`font-semibold px-4 py-2 rounded-xl transition ${
              dark
                ? "text-green-200 hover:text-green-400 hover:bg-gray-800"
                : "text-green-700 hover:bg-green-500 hover:text-white"
            }`}
          >
            Records
          </a>
          <a
            href="/message"
            className={`font-semibold px-4 py-2 rounded-xl transition ${
              dark
                ? "text-green-200 hover:text-green-400 hover:bg-gray-800"
                : "text-green-700 hover:bg-green-500 hover:text-white"
            }`}
          >
            Message
          </a>
          <button
            onClick={() => setDark(!dark)}
            className={`ml-4 px-4 py-2 rounded-xl border-2 font-bold shadow transition ${
              dark
                ? "bg-gray-800 border-green-500 text-green-200 hover:bg-gray-700"
                : "bg-gradient-to-r from-green-100 to-green-200 border-green-400 text-green-700"
            }`}
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            dark ? "text-green-100" : "text-green-800"
          }`}
        >
          WhatsApp Bulk Messaging
        </h2>

        <div
          className={`p-6 rounded-2xl border shadow-lg space-y-6 ${
            dark
              ? "bg-gradient-to-br from-gray-900 via-green-950 to-gray-800 border-green-800"
              : "bg-white border-green-200"
          }`}
        >
          {/* Message Editor */}
          <div>
            <label
              className={`block mb-2 font-semibold ${
                dark ? "text-green-100" : "text-green-800"
              }`}
            >
              Message:
            </label>
            
            {/* Quill Editor Container */}
            <div className="bg-white rounded-lg overflow-hidden border">
              {!isQuillLoaded && (
                <div className="p-4 text-center text-gray-500">
                  Loading editor...
                </div>
              )}
              <div
                ref={editorRef}
                style={{ minHeight: '150px' }}
                className="text-gray-900"
              />
            </div>

            {/* Current Content Preview */}
            {message && (
              <div className={`mt-2 p-2 text-xs rounded ${
                dark ? "bg-gray-800 text-green-200" : "bg-green-50 text-green-700"
              }`}>
                <div className="font-semibold">Current Text:</div>
                <div className="truncate">{message.substring(0, 100)}{message.length > 100 ? '...' : ''}</div>
              </div>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label
              className={`block mb-2 font-semibold ${
                dark ? "text-green-100" : "text-green-800"
              }`}
            >
              Attach Files:
            </label>
            <input
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className={`block w-full text-sm border p-2 rounded-lg ${
                dark
                  ? "bg-gray-800 border-green-700 text-green-100"
                  : "bg-green-50 border-green-300 text-green-900"
              }`}
            />
            {mediaFiles.length > 0 && (
              <div className="mt-2 text-sm italic text-green-500">
                {mediaFiles.length} file(s) selected
              </div>
            )}
          </div>

          {/* Info + Send Button */}
          <div className="flex justify-between items-center">
            <p
              className={`${
                dark ? "text-green-200" : "text-green-700"
              } font-medium`}
            >
              Total Numbers: {phoneNumbers.length}
            </p>
            <button
              onClick={handleSend}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition ${
                dark
                  ? "bg-gradient-to-r from-green-700 to-green-900 text-green-100 hover:from-green-800 hover:to-green-950"
                  : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
              }`}
            >
              🚀 Send Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}