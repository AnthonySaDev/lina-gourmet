import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Buy from '../pages/Buy';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
