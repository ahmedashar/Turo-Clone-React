
import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import GiftCard from './components/GiftCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Host from './components/Host';
import Questions from './components/Question';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Services from './components/Serives';
import Travelouges from './components/Travelouges';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Travelouges />
      <Experience />
      <GiftCard />
      <Host />
      <Services />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
