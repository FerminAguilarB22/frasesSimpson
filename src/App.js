import './App.css';
import logo from './logoSimpson.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Frase from './components/Frase';
function App() {
  return (
<section className='container my-5 d-flex flex-column align-items-center'>
  <img src={logo} alt="Logo de los Simpsons" width='100%' />
  <Button variant='warning' className='w-50 my-4'>Obtener frase</Button>
  <Frase></Frase>
</section>
  );
}

export default App;
