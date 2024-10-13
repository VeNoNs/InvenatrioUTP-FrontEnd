"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface AgregarTrabajadorModalProps {
  agregarTrabajador: (trabajador: any) => void;
}

export default function AgregarTrabajadorModal({ agregarTrabajador }: AgregarTrabajadorModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [idTrabajador, setIdTrabajador] = useState("");
  const [nombres, setNombres] = useState("");
  const [apeMaterno, setApeMaterno] = useState("");
  const [apePaterno, setApePaterno] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoTrabajador = {
      idTrabajador,
      nombres,
      apeMaterno,
      apePaterno,
      email,
      dni,
      domicilio,
      contraseña,
      rol,
    };
    agregarTrabajador(nuevoTrabajador);
    setIsOpen(false); // Cerrar el modal
    resetForm();
  };

  const resetForm = () => {
    setIdTrabajador("");
    setNombres("");
    setApeMaterno("");
    setApePaterno("");
    setEmail("");
    setDni("");
    setDomicilio("");
    setContraseña("");
    setRol("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-color1 hover:bg-color2 text-white py-2 px-4 rounded-lg"
      >
        + Agregar Trabajador
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
                    Agregar Trabajador
                  </Dialog.Title>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ID Trabajador</label>
                      <input
                        type="text"
                        value={idTrabajador}
                        onChange={(e) => setIdTrabajador(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombres</label>
                      <input
                        type="text"
                        value={nombres}
                        onChange={(e) => setNombres(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                      <input
                        type="text"
                        value={apeMaterno}
                        onChange={(e) => setApeMaterno(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                      <input
                        type="text"
                        value={apePaterno}
                        onChange={(e) => setApePaterno(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">DNI</label>
                      <input
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Domicilio</label>
                      <input
                        type="text"
                        value={domicilio}
                        onChange={(e) => setDomicilio(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                      <input
                        type="password"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Rol</label>
                      <input
                        type="text"
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-color1 hover:bg-color2 text-white py-2 rounded-md mt-4"
                    >
                      Agregar Trabajador
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
