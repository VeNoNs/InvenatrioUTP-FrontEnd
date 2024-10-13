"use client";

import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import WelcomeSection from "@/components/auth/WelcomeSection";

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    console.log("Login con:", email, password);
  };

  return (
    <div className="flex h-screen bg-color5">
      <div className="flex w-1/2 justify-center items-center p-10">
        <div className="w-full max-w-md">
          <Image
            src="/assets/logob.png" // Cambia esta ruta por el nuevo logo
            alt="Logo Barato Barato"
            width={120}
            height={120}
            className="mx-auto mb-8"
          />
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
      <div className="w-1/2 bg-color3 text-white flex flex-col justify-center items-center p-10">
        {/* Usamos el color3 como el fondo */}
        <WelcomeSection />
      </div>
    </div>
  );
}
