import { useForm } from "react-hook-form";
import useLocalStorage from "./useLocalStorage";
import { useEffect, useState } from "react";
import icono from "../images/1.jpg";
const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
    clearErrors,
    watch,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [registros, setRegistros] = useLocalStorage("registros", []);
  const [formEnviado, setFormEnviado] = useState(false);

  const password = watch("pass");
  const confirmPassword = watch("confirmPass");

  const onSubmit = (data) => {
    if (password !== confirmPassword) {
      setError("confirmPass", {
        type: "manual",
        message: "Las contraseñas no coinciden",
      });
      return;
    }

    setRegistros([...registros, data]);
    reset();
    setFormEnviado(true);
  };

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setError("confirmPass", {
        type: "manual",
        message: "Las contraseñas no coinciden",
      });
    } else {
      clearErrors("confirmPass");
    }
  }, [password, confirmPassword, setError, clearErrors]);

  return (
    <div className="flex justify-center items-start pt-10 h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="flex justify-center mb-6">
          <img src={icono} alt="Logo" className="h-10" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Registrarse
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre(s)*
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                {...register("nombre", {
                  required: "El campo nombre es requerido",
                  maxLength: {
                    value: 20,
                    message:
                      "El campo nombre debe tener menos de 20 caracteres",
                  },
                })}
              />
              {errors.nombre && (
                <p className="text-xs text-red-600">{errors.nombre.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Apellido(s)*
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                {...register("apellido", {
                  required: "El campo apellido es requerido",
                  maxLength: {
                    value: 20,
                    message:
                      "El campo apellido debe tener menos de 20 caracteres",
                  },
                })}
              />
              {errors.apellido && (
                <p className="text-xs text-red-600">
                  {errors.apellido.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Código SIS*
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                {...register("codigoSIS", {
                  required: "Código SIS es obligatorio",
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: "Código SIS debe tener 9 dígitos",
                  },
                })}
              />
              {errors.codigoSIS && (
                <p className="text-xs text-red-600">
                  {errors.codigoSIS.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo*
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                {...register("email", {
                  required: "Correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "El formato del correo es incorrecto",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña*
              </label>
              <input
                type="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                {...register("pass", {
                  required: "La contraseña es obligatoria",
                })}
              />
              {errors.pass && (
                <p className="text-xs text-red-600">{errors.pass.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmar contraseña*
              </label>
              <input
                type="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm text-sm"
                {...register("confirmPass", {
                  required: "Confirmar contraseña es obligatorio",
                })}
              />
              {errors.confirmPass && (
                <p className="text-xs text-red-600">
                  {errors.confirmPass.message}
                </p>
              )}
            </div>
          </div>

          {formEnviado && (
            <div className="mt-4 text-center">
              <p className="text-[#5E8D74]">¡Formulario enviado con éxito!</p>
              <a
                href="/mostrar"
                className="text-[#374355] underline hover:text-[#2c3442]"
              >
                Ver registros
              </a>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#5E8D74] text-white font-semibold rounded-md shadow-lg transition-transform transform active:translate-y-1"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
