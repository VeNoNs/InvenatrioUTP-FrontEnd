"use client";

import { useState } from "react";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-color1">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-color3 text-sm font-bold mb-2">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-color1"
          />
        </div>
        <div className="mb-6">
          <label className="block text-color3 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-color1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-color1 text-white py-2 rounded-lg font-bold hover:bg-color2"
        >
          Iniciar Sesión
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        <a href="#" className="text-color3 hover:underline">
          ¿Has olvidado tu contraseña?
        </a>
      </p>
    </div>
  );
}
