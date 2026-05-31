import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
function App() {
  return (
    <>
      <Header />
      <div id="div1">Welcome to Student Portal</div>
      <p className="fw-bold">name : Raj Gupta</p>
      <p>Course : B-Tech</p>
      <p>City : Bhopal</p>
      <button>Click Me!</button>
      <p>Thank You</p>
      <Footer />
    </>
  );
}
export default App;
