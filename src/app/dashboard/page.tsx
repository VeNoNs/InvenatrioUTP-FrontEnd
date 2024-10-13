"use client";

import { useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    ventas: "$24k",
    clientes: "1.6k",
    pedidosCompletados: "75.5%",
    gastos: "$15k",
  });

  const [productos, setProductos] = useState([
    { id: "1", nombre: "Soja & Co. Eucalyptus", fecha: "Oct 13, 2024" },
    { id: "2", nombre: "Necessaire Body Lotion", fecha: "Oct 13, 2024" },
    { id: "3", nombre: "Ritual of Sakura", fecha: "Oct 13, 2024" },
    { id: "4", nombre: "Lancome Rouge", fecha: "Oct 13, 2024" },
    { id: "5", nombre: "Erbology Aloe Vera", fecha: "Oct 13, 2024" },
  ]);

  const salesData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Ventas 2024',
        data: [12000, 19000, 3000, 5000, 20000, 30000, 25000, 27000, 21000, 24000, 32000, 35000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sección de métricas */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Ventas</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.ventas}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Clientes</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.clientes}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Pedidos Completados</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.pedidosCompletados}</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Gastos</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.gastos}</p>
          </div>
        </div>

        {/* Gráfico de ventas */}
        <div className="mt-6 p-6 bg-white shadow rounded-lg">
          <h3 className="text-lg font-bold mb-4">Ventas</h3>
          <Bar data={salesData} />
        </div>
      </div>

      {/* Lista de últimos productos */}
      <div className="p-6 bg-white shadow rounded-lg">
        <h3 className="text-lg font-bold mb-4">Últimos Productos</h3>
        <ul className="space-y-4">
          {productos.map((producto) => (
            <li key={producto.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{producto.nombre}</p>
                <p className="text-xs text-gray-500">Updated {producto.fecha}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
