"use client";

import { useState } from "react";
import AgregarProveedorModal from "@/components/dashboard//proveedor/AgregarProveedorModal";

export default function ProveedoresPage() {
  const [proveedores, setProveedores] = useState([
    {
      idProveedor: "PROV001",
      nombreProveedor: "Alcides Antonio",
      ruc: "123456789",
      telefono: "908-691-3242",
    },
  ]);

  // Función para agregar un nuevo proveedor
  const agregarProveedor = (nuevoProveedor: any) => {
    setProveedores((prevProveedores) => [...prevProveedores, nuevoProveedor]);
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Proveedores</h1>
        <AgregarProveedorModal agregarProveedor={agregarProveedor} />
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Proveedor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre Proveedor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              RUC
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Teléfono
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {proveedores.map((proveedor) => (
            <tr key={proveedor.idProveedor}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{proveedor.idProveedor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{proveedor.nombreProveedor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{proveedor.ruc}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{proveedor.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
