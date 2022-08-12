import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//componentes
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import {UserProvider} from './context/UserContext'

// pages
import Login from "./components/pages/Auth/Login";
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </UserProvider>  
      </Router>
    </div>
  );
}

export default App;
