import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home'
import About from './pages/About/About';
import './App.css';

import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>

        <Route path="/Login" element={<Login></Login>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
