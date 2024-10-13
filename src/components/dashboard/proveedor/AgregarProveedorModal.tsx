"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface AgregarProveedorModalProps {
  agregarProveedor: (proveedor: any) => void;
}

export default function AgregarProveedorModal({ agregarProveedor }: AgregarProveedorModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [idProveedor, setIdProveedor] = useState("");
  const [nombreProveedor, setNombreProveedor] = useState("");
  const [ruc, setRuc] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoProveedor = { idProveedor, nombreProveedor, ruc, telefono };
    agregarProveedor(nuevoProveedor); // Añadir el proveedor a la lista
    setIsOpen(false); // Cerrar el modal
    resetForm(); // Reiniciar formulario
  };

  const resetForm = () => {
    setIdProveedor("");
    setNombreProveedor("");
    setRuc("");
    setTelefono("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-color1 hover:bg-color2 text-white py-2 px-4 rounded-lg"
      >
        + Agregar Proveedor
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
                    Agregar Proveedor
                  </Dialog.Title>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ID Proveedor</label>
                      <input
                        type="text"
                        value={idProveedor}
                        onChange={(e) => setIdProveedor(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre Proveedor</label>
                      <input
                        type="text"
                        value={nombreProveedor}
                        onChange={(e) => setNombreProveedor(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">RUC</label>
                      <input
                        type="text"
                        value={ruc}
                        onChange={(e) => setRuc(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                      <input
                        type="text"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-color1 hover:bg-color2 text-white py-2 rounded-md mt-4"
                    >
                      Agregar Proveedor
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
