import { HeroSection } from '../Federation';
import { AboutSection } from '../About';
import { MembershipSection } from '../MemberShip';
import { ContactSection } from '../Contact';
import { EventsSection } from '../Events-Calendar';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <MembershipSection />
      <ContactSection />
    </div>
  );
}
