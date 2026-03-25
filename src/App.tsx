import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import JobApplication from './components/JobApplication';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App Component
function App() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onCareerClick={() => setIsCareerOpen(true)} />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer onCareerClick={() => setIsCareerOpen(true)} />
      <JobApplication isOpen={isCareerOpen} onClose={() => setIsCareerOpen(false)} />
    </div>
  )
}

export default App
