import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/views/Home.jsx";
import Login from "./features/auth/components/Login.jsx";
import Register from "./features/auth/components/Register.jsx";
import { ApiRyC } from "./features/api/components/ApiRyC_Axios.jsx";
import Gastos from "./features/views/Gastos.jsx";
import Metas from "./features/views/Metas.jsx";
import Estadisticas from "./features/views/Estadisticas.jsx";
import Acerca from "./features/views/Acerca.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ApiRyC" element={<ApiRyC />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;