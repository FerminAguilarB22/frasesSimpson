import './App.css';
import logo from './logoSimpson.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Frase from './components/Frase';
import { useEffect, useState } from 'react';
function App() {

const [personaje, setPersonaje] = useState({});

useEffect(()=>{
  consultaAPI();
},[]);

const consultaAPI = async ()=>{
  const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const dato = await respuesta.json(); //obtener datos del body de la request
  //guardar los datos en el state personajes
  setPersonaje(dato[0]);
}

  return (
<section className='container my-5 d-flex flex-column align-items-center'>
  <img src={logo} alt="Logo de los Simpsons" width='100%' />
  <Button variant='warning' className='w-50 my-4' onClick={()=>{consultaAPI()}}>Obtener frase</Button>
  <Frase personaje={personaje}></Frase>
</section>
  );
}

export default App;
