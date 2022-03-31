import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

const Hello = (props) =>{  //componente de react, se utuliza el formato de emacscript vigente para declarar funciones flecha en java script
    // a los componenetes de react les podemos pasar parametros y tambien ser utilizados de manera recursiva
    return(
        <div>
            <p> Hello {props.name} you are  {props.age} years old</p>
        </div>
    )
}

const App =()=>{
    const name = 'josue' // si las propiedades son el resultado de operaciones o expresiones de javascript, se inseta entre corchetes{} de lo contrario se inserta entre comillas 'como strings'
    const age = 3
    return (
        <div>
            <h1>Saludos</h1>
            <Hello name ='luis' age='31'/> 
            <Hello name ={name} age={age} />
            <Hello name ='greis'age='32' />
        </div>
    )
}

export default App;