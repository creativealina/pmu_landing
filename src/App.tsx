import { About } from './components/About';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Nav } from './components/Nav';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
