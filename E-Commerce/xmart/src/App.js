import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/shop';
import shopCategory from './Pages/shopCategory';
import cart from './Pages/cart';
import product from './Pages/product';
import loginSignup from './Pages/loginSignup';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Shop/>
        <Routes>
          <Route path='/' element={<shop/>}></Route>
          <Route path='/Mens' element={<shopCategory category="men"/>}></Route>
          <Route path='/Womens' element={<shopCategory category="women"/>}></Route>
          <Route path='/Kids' element={<shopCategory category="kid"/>}></Route>
          <Route path='/Product' element={<product/>}>
            <Route path=':ProductId' element={<product/>}></Route>
          </Route>
          <Route path='/Cart' element={<cart/>}></Route>
          <Route path='/Login' element={<loginSignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
