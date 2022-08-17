import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//componentes
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

import {UserProvider} from './context/UserContext'

// pages
import Login from "./components/pages/Auth/Login";
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';
import MinhasSolucoes from './components/pages/Solucoes/MinhasSolucoes'
import AddSolucao from './components/pages/Solucoes/AddSolucao';


function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/solucoes/minhassolucoes' element={<MinhasSolucoes />} />
            <Route path='/solucoes/add' element={<AddSolucao />} />
          </Routes>
          
        </UserProvider>  
      </Router>
    </div>
  );
}

export default App;
