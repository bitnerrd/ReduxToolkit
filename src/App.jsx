import React from "react"
import Product from "./components/Product"
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/App.css"


function App() {

  return (
    <>
      <Navbar />
      <Product />
      <h1>Redux Toolkit</h1>
    </>
  )
}

export default App
