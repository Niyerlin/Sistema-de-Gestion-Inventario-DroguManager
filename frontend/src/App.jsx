import './App.css'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductoComponent from './components/ListProductoComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            // http://localhost:3000
              <Route path="/"element={<ListProductoComponent/>}></Route>
              // http://localhost:3000/producto
              <Route path="/producto" element ={<ListProductoComponent/>}></Route>
              
          </Routes> 
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App;