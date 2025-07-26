import { useState } from 'react';
import './CampoTexto.css';
//um code style do mesmo tipo do Banner
//props - propriedades que o componente recebeu
const CampoTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}`
   
    //Hook: uma coisa que o React entrega para que seja posível manter um estado numa função
    //useState: gera 2 objetos: um pra ler e outro para escrever 
  

    const aoDigitado = (evento) =>{
       props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto