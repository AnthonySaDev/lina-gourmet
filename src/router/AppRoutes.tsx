import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Buy from '../components/Buy';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </Router>
  );
}
