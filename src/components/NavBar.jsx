import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Inicio",
    href: "/home",
  },
  {
    name: "Registrarse",
    href: "/registrar",
  },
  {
    name: "Registros",
    href: "/mostrar",
  },
];

const NavBar = () => {
  const location = useLocation(); // Obtener la ruta actual

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold text-gray-800">ProjectApp</div>
        <div className="flex space-x-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`px-4 py-2 rounded-md text-gray-600 font-medium transition-colors duration-300 ${
                location.pathname === link.href
                  ? "bg-gray-200 text-gray-900 font-semibold"
                  : "hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
