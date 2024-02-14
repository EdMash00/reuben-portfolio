import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Rates from './pages/Rates';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="font-acme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
