import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home'
import About from './pages/About/About';
import './App.css';

import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Register from './pages/Register/Register';
import CheckOut from './pages/CheckOut/CheckOut';
import RequreAuth from './pages/RequreAuth/RequreAuth';
import ServiceDetails from './pages/About/ServiceDetails/ServiceDetails';
import NotFound from './pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/service/:serviceid" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>

        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/CheckOut" element={
          <RequreAuth>
            <CheckOut></CheckOut>
          </RequreAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
