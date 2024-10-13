"use client";

import { useState } from "react";
import AgregarMovimientoModal from "@/components/dashboard/movimiento/AgregarMovimientoModal";

export default function MovimientosPage() {
  // Estado de los movimientos y detalles de productos
  const [movimientos, setMovimientos] = useState([
    {
      idMovimiento: "001",
      producto: "Coca Cola",
      cantidad: 100,
      tipo: "Entrada",
      fecha: "2024-10-12 10:00 AM",
      trabajador: "Juan Pérez",
    },
    {
      idMovimiento: "002",
      producto: "Pepsi",
      cantidad: 50,
      tipo: "Salida",
      fecha: "2024-10-12 02:00 PM",
      trabajador: "Ana Martínez",
    },
  ]);

  // Función para agregar un nuevo movimiento
  const agregarMovimiento = (nuevoMovimiento: any) => {
    setMovimientos((prevMovimientos) => [...prevMovimientos, nuevoMovimiento]);
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Movimientos de Inventario</h1>
        <AgregarMovimientoModal agregarMovimiento={agregarMovimiento} />
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Movimiento
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cantidad
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trabajador
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {movimientos.map((movimiento) => (
            <tr key={movimiento.idMovimiento}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{movimiento.idMovimiento}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movimiento.producto}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movimiento.cantidad}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${movimiento.tipo === 'Entrada' ? 'text-green-500' : 'text-red-500'}`}>
                {movimiento.tipo}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movimiento.fecha}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movimiento.trabajador}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
