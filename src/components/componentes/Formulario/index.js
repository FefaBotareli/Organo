import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do(a) autor(a)</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome do(a) autor(a)" />
        <CampoTexto label="Livro" placeholder="Digite o livro mais popular" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço de imagem" />
        <CampoTexto
          label="Gênero"
          placeholder="Selecione o gênero principal do autor"
        />
      </form>
    </section>
  );
};

export default Formulario;
