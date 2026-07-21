import Navbar from './presentation/views/components/Navbar';
import Hero from './presentation/views/components/Hero';
import StatsBanner from './presentation/views/components/StatsBanner';
import About from './presentation/views/components/About';
import Skills from './presentation/views/components/Services';
import Experience from './presentation/views/components/Experience';
import Portfolio from './presentation/views/components/Portfolio';
import Testimonials from './presentation/views/components/Testimonials';
import Contact from './presentation/views/components/Contact';
import ThoughtOfTheDay from './presentation/views/components/ThoughtOfTheDay';
import Footer from './presentation/views/components/Footer';
import BackToTop from './presentation/views/components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="pdf-content">
        <Hero />
        <StatsBanner />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <ThoughtOfTheDay />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;


