// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Conteudo from "./pages/Conteudo";
import ContextProvider from "./Components/AppContext";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Conteudo />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
