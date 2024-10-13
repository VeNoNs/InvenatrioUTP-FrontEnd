"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logging out...");
    router.push('/auth'); // Redirigir al login después del logout
  };

  return (
    <aside className="bg-color4 text-white w-64 fixed top-0 left-0 h-screen flex flex-col justify-between">
      <div className="p-4">
        <img src="/assets/logob.png" alt="Logo" className="w-40 h-auto mx-auto" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-4 p-4">
          <li>
            <Link href="/dashboard" className="text-white hover:bg-color3 block px-4 py-2 rounded-md">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/producto" className="text-white hover:bg-color3 block px-4 py-2 rounded-md">
              Producto
            </Link>
          </li>
          <li>
            <Link href="/dashboard/proveedor" className="text-white hover:bg-color3 block px-4 py-2 rounded-md">
              Proveedor
            </Link>
          </li>
          <li>
            <Link href="/dashboard/movimiento" className="text-white hover:bg-color3 block px-4 py-2 rounded-md">
              Movimiento
            </Link>
          </li>
          <li>
            <Link href="/dashboard/trabajador" className="text-white hover:bg-color3 block px-4 py-2 rounded-md">
              Trabajador
            </Link>
          </li>
          <li>
            <Link href="/dashboard/categoria" className="text-white hover:bg-color3 block px-4 py-2 rounded-md">
              Categoría
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="bg-color1 hover:bg-color2 text-white w-full py-2 rounded-md">
          Logout
        </button>
      </div>
    </aside>
  );
}
