import React from "react";
import { Routes, Route} from 'react-router-dom' 
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
          <Routes>
            <Route path="/home"><Home/></Route>
            <Route path="/login"><Login/></Route>
          </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
