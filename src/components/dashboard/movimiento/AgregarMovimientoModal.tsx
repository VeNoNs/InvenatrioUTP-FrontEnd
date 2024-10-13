"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface AgregarMovimientoModalProps {
  agregarMovimiento: (movimiento: any) => void;
}

export default function AgregarMovimientoModal({ agregarMovimiento }: AgregarMovimientoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [tipo, setTipo] = useState("Entrada");
  const [trabajador, setTrabajador] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString().slice(0, 16));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoMovimiento = {
      idMovimiento: Date.now().toString(), // Genera un ID único basado en timestamp
      producto,
      cantidad,
      tipo,
      fecha,
      trabajador,
    };
    agregarMovimiento(nuevoMovimiento); // Llama a la función para agregar el movimiento
    setIsOpen(false); // Cierra el modal
    resetForm(); // Reinicia el formulario
  };

  const resetForm = () => {
    setProducto("");
    setCantidad(0);
    setTipo("Entrada");
    setTrabajador("");
    setFecha(new Date().toISOString().slice(0, 16));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-color1 hover:bg-color2 text-white py-2 px-4 rounded-lg"
      >
        + Agregar Movimiento
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Agregar Movimiento
                  </Dialog.Title>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Producto</label>
                      <input
                        type="text"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                      <input
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tipo de Movimiento</label>
                      <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="Entrada">Entrada</option>
                        <option value="Salida">Salida</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fecha</label>
                      <input
                        type="datetime-local"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Trabajador</label>
                      <input
                        type="text"
                        value={trabajador}
                        onChange={(e) => setTrabajador(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-color1 hover:bg-color2 text-white py-2 rounded-md mt-4"
                    >
                      Agregar Movimiento
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
