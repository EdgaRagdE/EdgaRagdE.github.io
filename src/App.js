import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Inicio from './components/inicio/inicio';
import Sobre from './components/sobre_mi/sobre';
import Proyectos from './components/proyectos/proyectos';
import NasaAPI from './components/nasaAPI/nasaAPI';
import ClimaAPI from './components/climaAPI/climaAPI';
import ContenedorYoutube from './components/contenedorYoutube/contenedorYoutube';
import imagenes from './components/assets/imagenes';

const mensajeDescripcion="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Sobre_mi' element={<Sobre />}/>
        <Route path='/Proyectos' element={<Proyectos />}/>
        <Route path='/youtube' element={<ContenedorYoutube titulo="Mi primer titulo" fechaPublicacion="19 de diciembre de 2020" antiguedad="3 años" nombreCanal="DiscoveryChannel" cantSuscriptores="1.1M" descripcion={mensajeDescripcion} iconoCanal={imagenes.Paisaje1}/>}/>
        <Route path='/nasa' element={<NasaAPI />}/>        
        <Route path='/clima' element={<ClimaAPI />}/>
      </Routes>
    </div>
  );
}

export default App;
