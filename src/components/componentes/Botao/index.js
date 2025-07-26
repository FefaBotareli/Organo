import './Botao.css'

//props = propriedade
const Botao = (props) =>{
    return(<button className='botao'>
        {props.children}
    </button>)
}

export default Botao