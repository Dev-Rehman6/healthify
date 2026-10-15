import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Advantage from './advantage';
import Plan from'./plan';
import Blog from'./blog';
import Contact from'./contact';

export default function App() {
  return (
    <Router>
      <div 
        className="min-h-screen bg-gray-50"
        style={{
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Oq7fgcH7t0S_czCdKayLjR5uvZbfRkPoKHq7lm7D1g&s)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/advantage" element={<Advantage/>}/>
          <Route path="/plan" element={<Plan/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}