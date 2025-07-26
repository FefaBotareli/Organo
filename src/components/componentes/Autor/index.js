import "./Autor.css";

const Autor = ({nome, imagem, livro, corDeFundo}) => {
  return (
    <div className="autor">
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{livro}</h5>
      </div>

    </div>
  );
};

export default Autor;
