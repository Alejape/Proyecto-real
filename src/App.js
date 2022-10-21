import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navegador from './Components/paginas/Navegador'
import Inicio from './Components/paginas/Inicio'
import Formación from './Components/paginas/Formación'
import Pasatiempo from './Components/paginas/Pasatiempo'



function App() {
  return (
    <div className="App">

<Router>
  <Navegador/>
   <Routes>
   <Route path= '/' exact element={<Inicio/>}/>
   <Route path= '/Formación' element={<Formación/>}/>
   <Route path= '/Navegador' element={<Navegador/>}/>
   <Route path= '/Pasatiempo' element={<Pasatiempo/>}/>
   <Route path= '/Inicio' element={<Inicio/>}/>
   </Routes>  
   </Router>

  </div>
  );
  }

export default App;
