import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    return (
        <div className='lista-suspensa'>
           <label>{props.label}</label>
           <select onChange={evento => props.aoAlterado(evento.target.value)}  required={props.required} value={props.valor}>
            <option value=''></option>
           {props.itens?.map((item, index) => (
  <option key={`${item}-${index}`}>{item}</option>
))}

         </select>
        </div>
    )
}

export default ListaSuspensa