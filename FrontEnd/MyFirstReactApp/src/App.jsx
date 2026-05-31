import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
function App() {
  return (
    <>
      <Header />
      <div id="div1">My First React App</div>
      <p className="fw-bold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, deleniti
      </p>
      <button>Click Me!</button>
      <Footer />
    </>
  );
}
export default App;
