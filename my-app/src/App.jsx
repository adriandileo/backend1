import { BrowserRouter, Routes , Route } from "react-router-dom" ;
import NavBar from "./e-commerce/navbar/navbar";
import  JustItem  from "./e-commerce/items/justone";
import { Objetos,CategoryObj } from "./e-commerce/items/objetos";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path = "/" element={<Objetos/>} />
        <Route path='/category/:category' element={<CategoryObj/>} />
        <Route path ={`/category/:category/:id`} element={<JustItem/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
