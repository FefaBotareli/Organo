import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [livro, setLivro] = useState('')
  const [imagem, setImagem] = useState('')
  const [grupo, setGrupo] = useState('')

  const aoSalvar = (evento) =>{
    evento.preventDefault()
    props.aoAutorCadastrado({
      nome,
      livro,
      imagem,
      grupo
    })
    setNome('')
    setLivro('')
    setImagem('')
    setGrupo('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do(a) autor(a)</h2>
        <CampoTexto 
        obrigatorio={true} 
        label="Nome" 
        placeholder="Digite o nome do(a) autor(a)" 
        valor={nome}
        aoAlterado = { valor => setNome(valor)}
        />
        <CampoTexto obrigatorio={true} 
        label="Livro" 
        placeholder="Digite o livro mais popular" 
        valor={livro}
        aoAlterado = { valor => setLivro(valor)}
        />
        <CampoTexto 
        label="Imagem" 
        placeholder="Digite o endereço de imagem" 
        valor={imagem}
        aoAlterado = { valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true}
        label="Gênero"
        placeholder="selecione o gênero do(a) autor(a)"
        itens={props.grupos}
        valor={grupo}
        aoAlterado = { valor => setGrupo(valor)}
          />
        <Botao> 
            Criar Card
          </Botao>
      </form>
    </section>
  );
};

export default Formulario;
