import './CampoTexto.css';
//um code style do mesmo tipo do Banner
//props - propriedades que o componente recebeu
const CampoTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto