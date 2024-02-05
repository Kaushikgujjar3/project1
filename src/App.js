
import './App.css';
import './style.css'
import Home from './Componets/Home'
import About from './Componets/About';
import './media.css'
import Fixd from './Componets/Fixd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Componets/Portfolio';
import Contact from './Componets/Contact';
import Blog from './Componets/Blog';
import Mobail_menu from './Componets/Mobail_menu';




function App() {
  return (
    <>
    
    <Mobail_menu></Mobail_menu>
   <Fixd></Fixd>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='About' element={<About></About>}></Route>
      <Route path='Portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='Contact' element={<Contact></Contact>}></Route>
      <Route path='Blog' element={<Blog></Blog>}></Route>
    </Routes>

    </>
  );
}

export default App;
