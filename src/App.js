import './App.css';
import logo from './logoSimpson.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Frase from './components/Frase';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
function App() {

const [personaje, setPersonaje] = useState({});
const [carga, setCarga] = useState(true);

useEffect(()=>{
  consultaAPI();
},[]);

const consultaAPI = async ()=>{
  setCarga(true);
  const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const dato = await respuesta.json(); //obtener datos del body de la request
  //guardar los datos en el state personajes
  setTimeout(() => {
    setPersonaje(dato[0]);
    setCarga(false);
  }, 1000);
}

// operador ternario
// (codicion logica)?(codigo a ejecutar si la condicion logica es verdadera):(codigo a ejecutar si la condicion es falsa)

const mostrarComponente = (carga === true) ? (<Spinner></Spinner>) : (<Frase personaje={personaje}></Frase>);

  return (
<section className='container my-5 d-flex flex-column align-items-center'>
  <img src={logo} alt="Logo de los Simpsons" width='100%' />
  <Button variant='warning' className='w-50 my-4' onClick={()=>{consultaAPI()}}>Obtener frase</Button>
  {mostrarComponente}
</section>
  );
}

export default App;
