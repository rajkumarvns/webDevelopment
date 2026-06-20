import Header from "./components/Header";
import Home from "./pages/Home";
// import About from "./pages/About";
import Login1 from "./pages/Login1";
import Register from "./pages/Register";
// import Product from "./pages/Product";
// import ContactUs from "./pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Login1 />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} /> */}
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/contactUs" element={<ContactUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
