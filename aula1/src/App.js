
import './App.css';
//importação do dados do router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//importação das paginas
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
//importando os componetes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="container">
          <Routes>
          <Route path='/' element={<Home />}/>
           <Route path='/sobre' element={<Sobre />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
