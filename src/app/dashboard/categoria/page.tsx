"use client";

import { useState } from "react";
import AgregarCategoriaModal from "@/components/dashboard/categoria/AgregarCategoriaModal";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState([
    {
      idCategoria: "CAT001",
      nombreCategoria: "Electrónica",
      descripcion: "Productos electrónicos",
    },
  ]);

  // Función para agregar una nueva categoría
  const agregarCategoria = (nuevaCategoria: any) => {
    setCategorias((prevCategorias) => [...prevCategorias, nuevaCategoria]);
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Categorías</h1>
        <AgregarCategoriaModal agregarCategoria={agregarCategoria} />
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Categoría
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre Categoría
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Descripción
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categorias.map((categoria) => (
            <tr key={categoria.idCategoria}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{categoria.idCategoria}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{categoria.nombreCategoria}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{categoria.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
