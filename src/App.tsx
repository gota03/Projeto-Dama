import './App.css'
import { Header } from './components/Header';
import { Footer } from './components/FooterSection';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { MembershipSection } from './components/MemberShipSection';

function App() {

  return (
    <div>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <EventsSection/>
      <MembershipSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
