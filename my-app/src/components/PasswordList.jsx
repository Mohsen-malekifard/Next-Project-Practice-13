'use client'
import { useEffect, useState } from "react";

export default function PasswordList() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("passwords") || "[]");
    setPasswords(data);
  }, []);

  const handleDelete = (id) => {
    const filtered = passwords.filter(p => p.id !== id);
    localStorage.setItem("passwords", JSON.stringify(filtered));
    setPasswords(filtered);
  };

  return (
    <div className="bg-white shadow p-4 rounded space-y-4">
      {passwords.length === 0 ? (
        <p className="text-gray-500">هیچ رمزی ثبت نشده است.</p>
      ) : (
        passwords.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-700">{item.password}</p>
            </div>
            <button
              className="text-red-500"
              onClick={() => handleDelete(item.id)}
            >
              حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
}