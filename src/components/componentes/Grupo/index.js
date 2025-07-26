import Autor from '../Autor';
import './Grupo.css';

const Grupo = (props) =>{
    return(
       (props.autores.length > 0) ? <section className='grupo' style={{backgroundColor: props.corSecundaria}}>

            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='autores'>
            {props.autores.map( autor => <Autor 
                corDeFundo={props.corPrimaria}
                key={autor.nome}
                nome={autor.nome}
                livro= {autor.livro}
                imagem = {autor.imagem}
                />)}
                </div>
        </section>
        : ''
    )
}
export default Grupo