import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Registrar } from "./screens/Registrar";
import { Home } from "./screens/Home";
import Mostrar from "./components/Mostrar";
import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/registrar"
            element={
              <>
                <NavBar />
                <Registrar></Registrar>
              </>
            }
          />

          <Route
            path="/mostrar"
            element={
              <>
                <NavBar />
                <Mostrar></Mostrar>
              </>
            }
          />

          <Route
            path="/*"
            element={
              <>
                <NavBar />
                <Home></Home>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
