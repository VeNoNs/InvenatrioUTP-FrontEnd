"use client";

import Sidebar from '@/components/dashboard/Sidebar';
import UserInfo from '@/components/dashboard/UserInfo'; // Componente del trabajador logueado

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = {
    name: "Juan Pérez",
    image: "/assets/avatarm.png", // Ruta de la imagen del trabajador
  };

  return (
    <div className="flex">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido principal del Dashboard */}
      <div className="flex-1 flex flex-col min-h-screen" style={{ paddingLeft: '16rem' }}> {/* Ajuste para que no se solape */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">BARATO BARATO INVENTARIO</h1>
          <UserInfo userName={user.name} userImage={user.image} />
        </header>

        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
