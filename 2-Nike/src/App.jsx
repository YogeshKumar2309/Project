import About from "./componets/About";
import Home from "./componets/Home";
import Nav from "./componets/Nav";
import { Route, Routes } from "react-router-dom";
import Contact from "./componets/Contact";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Services from "./componets/Services";
import Products from "./componets/Products";



const App = () => {

  return (
    <>
      <main className="reative ">
        <Nav />
  
     

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
       
      </main>
    </>
  );
};

export default App;
