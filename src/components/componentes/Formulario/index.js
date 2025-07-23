import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const generos = [
    'Romance',
    'Fantasia',
    'Mistério',
    'Suspense',
    'Clássico'
  ]

  const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do(a) autor(a)</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do(a) autor(a)" />
        <CampoTexto obrigatorio={true} label="Livro" placeholder="Digite o livro mais popular" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço de imagem" />
        <ListaSuspensa obrigatorio={true} label="Gênero" itens={generos}/>
        <Botao> 
            Criar Card
          </Botao>
      </form>
    </section>
  );
};

export default Formulario;
