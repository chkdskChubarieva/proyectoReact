import Carousel from "../components/Carousel";
import "./Home.css";
import icono from "../images/1.jpg";

export const Home = () => {
  return (
    <>
      <div className="home-container bg-gray-100">
        <div className="home-content">
          <Carousel />
          <div className="home-description">
            <div className="flex justify-center mb-5">
              <img src={icono} alt="Logo" className="h-10 object-contain" />
            </div>
            <h2>Evaluación Basada en Proyectos</h2>
            <p>
              Plataforma dedicada al seguimiento y organización de proyectos de
              desarrollo de software ágiles, uso del marco de trabajo SCRUM.
            </p>
            <div className="home-buttons">
              <a href="/mostrar">
                <button className="button view-registers">Ver Registros</button>
              </a>
              <a href="/registrar">
                <button className="button register">Registrarse</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
