import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import SolutionsPage from './pages/SolutionsPage';
import Contact from './pages/Contact';
import Join from './pages/Join';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/solutions' element={<SolutionsPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}
