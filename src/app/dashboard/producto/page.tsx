"use client";

import { useState } from "react";

import AgregarProductoModal from "@/components/dashboard/producto/AgregarProductoForm";
import Image from "next/image";

export default function ProductosPage() {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([
    {
      idProducto: "001",
      nombreProducto: "Coca Cola",
      descripcion: "Gaseosa refrescante de cola. 500ml.",
      stock: 120,
      tiempoFinal: "2024-10-12T10:00",
      idProveedor: "PROV001",
      idCategoria: "CAT001",
      image: "/assets/cocacola.webp",
    },
    {
      idProducto: "002",
      nombreProducto: "Pepsi",
      descripcion: "Gaseosa refrescante de cola. 500ml.",
      stock: 85,
      tiempoFinal: "2024-10-12T11:00",
      idProveedor: "PROV002",
      idCategoria: "CAT002",
      image: "/assets/pepsi.webp",
    },
  ]);

  // Función para agregar un nuevo producto
  const agregarProducto = (nuevoProducto: any) => {
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  };

  return (
    <div className="flex h-screen">
     
      <main className="flex-1 p-6 bg-color5">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Productos en Stock</h1>
          {/* El botón ahora abre el modal y pasa la función agregarProducto */}
          <AgregarProductoModal agregarProducto={agregarProducto} />
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.idProducto} className="bg-white shadow-md rounded-lg p-4">
              <Image src={producto.image} alt={producto.nombreProducto} width={200} height={400} />
              <h2 className="text-xl font-bold">{producto.nombreProducto}</h2>
              <p className="text-gray-600">{producto.descripcion}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-color3 font-bold">Stock: {producto.stock}</span>
                <span className="text-gray-500">Actualizado hace 2 hours</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
