
import './App.css';
//importação do dados do router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//importação das paginas
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
          <Route path='/' element={<Home />}/>
           <Route path='/sobre' element={<Sobre />}/>
          </Routes>
        </div>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
