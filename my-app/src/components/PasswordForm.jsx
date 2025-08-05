'use client'
import { useState } from "react";

export default function PasswordForm() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!title || !password) return;

    const existing = JSON.parse(localStorage.getItem("passwords") || "[]");
    existing.push({ id: Date.now(), title, password });
    localStorage.setItem("passwords", JSON.stringify(existing));

    setTitle("");
    setPassword("");
    window.location.reload();
  };

  return (
    <div className="bg-white shadow p-4 rounded space-y-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="عنوان"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        ذخیره
      </button>
    </div>
  );
}