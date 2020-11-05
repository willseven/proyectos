import React, {useState, Fragment} from 'react';



const Componente2 = () => {

    const [datos, setDatos] = useState({
        nombre: ''
    })

    const Cargar = (event) => {
        
        setDatos({
            ...datos,
           [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre)
    }
    
    return (
        <Fragment>
        <div className="container bg-secondary text-light p-4 mb-3">
            <h3>Componente 2</h3>
            <form   onSubmit={enviarDatos}>
                <div className="row">
                <div className="form-group col">
                    <input
                    placeholder="Escribe algo"
                    type="text"
                    className="form-control"
                    name="nombre"
                    onChange={Cargar}
                    />
                </div>
                </div>
        </form>
        {
            (datos.nombre) ? <h4 className="container border border-light rounded p-3 text-light">{datos.nombre}</h4> : <h4 className="container border border-danger rounded p-3 text-danger">campo vacio</h4> 
        }
        
        </div>
    </Fragment>  
   )
}
 
export default Componente2;