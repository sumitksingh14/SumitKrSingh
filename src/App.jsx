import Navbar from './presentation/views/components/Navbar';
import Hero from './presentation/views/components/Hero';
import About from './presentation/views/components/About';
import Skills from './presentation/views/components/Services';
import Experience from './presentation/views/components/Experience';
import Portfolio from './presentation/views/components/Portfolio';
import Testimonials from './presentation/views/components/Testimonials';
import Contact from './presentation/views/components/Contact';
import Footer from './presentation/views/components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="pdf-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
