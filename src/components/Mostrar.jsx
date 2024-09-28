import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

const Mostrar = () => {
  const [registros, setRegistros] = useLocalStorage("registros", []);
  const [selected, setSelected] = useState([]);

  const toggleSelect = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleDelete = () => {
    const nuevosRegistros = registros.filter((_, index) => !selected.includes(index));
    setRegistros(nuevosRegistros);
    setSelected([]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Lista de Registros</h2>
        {registros.length === 0 ? (
          <p className="text-gray-600 text-center">No hay registros.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border-b px-4 py-2 text-left text-gray-700">Nro</th>
                  <th className="border-b px-4 py-2 text-left text-gray-700">Seleccionar</th>
                  <th className="border-b px-4 py-2 text-left text-gray-700">Nombre</th>
                  <th className="border-b px-4 py-2 text-left text-gray-700">Apellido</th>
                  <th className="border-b px-4 py-2 text-left text-gray-700">Código SIS</th>
                  <th className="border-b px-4 py-2 text-left text-gray-700">Email</th>
                </tr>
              </thead>
              <tbody>
                {registros.map((registro, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border-b px-4 py-2 text-gray-700">{index + 1}</td>
                    <td className="border-b px-4 py-2">
                      <input
                        type="checkbox"
                        onChange={() => toggleSelect(index)}
                        checked={selected.includes(index)}
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="border-b px-4 py-2 text-gray-700">{registro.nombre}</td>
                    <td className="border-b px-4 py-2 text-gray-700">{registro.apellido}</td>
                    <td className="border-b px-4 py-2 text-gray-700">{registro.codigoSIS}</td>
                    <td className="border-b px-4 py-2 text-gray-700">{registro.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            className={`px-4 py-2 text-white bg-red-600 rounded ${
              selected.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
            }`}
            onClick={handleDelete}
            disabled={selected.length === 0}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mostrar;

