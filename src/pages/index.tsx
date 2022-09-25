import Aos from 'aos';
import { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledges } from '../components/Knowledges';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledges />
        <ContactForm />
      </main>

      <Footer />
    </HomeContainer>
  );
}
