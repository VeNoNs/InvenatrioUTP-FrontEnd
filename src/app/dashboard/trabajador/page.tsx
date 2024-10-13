"use client";

import { useState } from "react";
import AgregarTrabajadorModal from "@/components/dashboard/trabajador/AgregarTrabajadorModal";

export default function TrabajadoresPage() {
  const [trabajadores, setTrabajadores] = useState([
    {
      idTrabajador: "TRAB001",
      nombres: "Juan Pérez",
      apeMaterno: "García",
      apePaterno: "Martínez",
      email: "juan.perez@example.com",
      dni: "12345678",
      domicilio: "Av. Los Pinos 123",
      rol: "Administrador",
    },
  ]);

  // Función para agregar un nuevo trabajador
  const agregarTrabajador = (nuevoTrabajador: any) => {
    setTrabajadores((prevTrabajadores) => [...prevTrabajadores, nuevoTrabajador]);
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Trabajadores</h1>
        <AgregarTrabajadorModal agregarTrabajador={agregarTrabajador} />
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Trabajador
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombres
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apellido Materno
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apellido Paterno
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DNI
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Domicilio
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rol
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {trabajadores.map((trabajador) => (
            <tr key={trabajador.idTrabajador}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trabajador.idTrabajador}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.nombres}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.apeMaterno}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.apePaterno}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.dni}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.domicilio}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trabajador.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
