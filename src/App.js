import { useState } from "react";
import Banner from "./components/componentes/Banner";
//import CampoTexto from './components/componentes/CampoTexto';
import Formulario from "./components/componentes/Formulario";
import Grupo from "./components/componentes/Grupo";
import Footer from "./components/componentes/Footer";

function App() {
  const grupos = [
    {
      nome: "Romance",
      corPrimaria: "#FF8DA1",
      corSecundaria: "#FFE5EC",
    },
    {
      nome: "Fantasia",
      corPrimaria: "#8A2BE2",
      corSecundaria: "#E6E6FA",
    },
    {
      nome: "Mistério",
      corPrimaria: "#2C3E50",
      corSecundaria: "#DCE3E9",
    },
    {
      nome: "Suspense",
      corPrimaria: "#B00020",
      corSecundaria: "#E6E6E6",
    },
    {
      nome: "Clássico",
      corPrimaria: "#8B6B3B",
      corSecundaria: "#FDF6E3",
    },
  ];

  const [autores, setAutores] = useState([]);
  const aoNovoAutorAdicionado = (autor) => {
    debugger
    setAutores([...autores, autor]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        grupos={grupos.map(grupo => grupo.nome)}
        aoAutorCadastrado={autor => aoNovoAutorAdicionado(autor)}
      />

      {grupos.map((grupo) => (
        <Grupo
          key={grupo.nome}
          nome={grupo.nome}
          corPrimaria={grupo.corPrimaria}
          corSecundaria={grupo.corSecundaria}
          autores={autores.filter(autor => autor.grupo === grupo.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
