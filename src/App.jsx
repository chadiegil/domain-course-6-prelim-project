import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Home, Errorpage, Edit, Contact, About } from "./pages";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";

function App() {
  return (
    <>
      <div className="d-flex align-item-center justify-content-end nav">
        <Link to="/" className="h5 text-white p-3">
          Home
        </Link>
        <Link to="/about" className="h5 text-white p-3">
          About
        </Link>
        <Link to="/contact" className="h5 text-white p-3">
          Contact
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
