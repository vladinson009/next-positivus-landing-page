import H2Title from '@/components/home-page/h2-title';
import Container from '../components/container';
import Hero from '@/components/home-page/hero';
import Services from '@/components/home-page/services-section/services';
import FreeProposal from '@/components/home-page/free-proposal';
import CaseStudiesCard from '@/components/home-page/case-studies';
import WorkingProcessAcordion from '@/components/home-page/working-process-accordion';
import TeamCardsSection from '@/components/home-page/team-cards-section';
import TestimonialsSection from '@/components/home-page/testimonials/testimonials-section';
import ContactUsSection from '@/components/home-page/contact-us/contact-form';
import Footer from '@/components/home-page/footer';

const navbar = [
  { href: 'about-us', title: 'About us' },
  { href: 'services', title: 'Services' },
  { href: 'use-cases', title: 'Use Cases' },
  { href: 'pricing', title: 'Pricing' },
  { href: 'blog', title: 'Blog' },
];

export default function HomePage() {
  return (
    <Container className="mt-4 md:mt-15">
      {/* //! First Section */}
      <Hero navbar={navbar} />
      {/* //! Second Section */}
      <H2Title title="Services">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </H2Title>
      <Services />
      <FreeProposal />
      {/* //! Third Section */}
      <H2Title title="Case Studies">
        Explore Real-Life Examples of Our Proven Digital Marketing Success through
        Our Case Studies
      </H2Title>
      <CaseStudiesCard />
      {/* //! Fourth Section */}
      <H2Title title="Our Working Process">
        Step-by-Step Guide to Achieving <br /> Your Business Goals
      </H2Title>
      <WorkingProcessAcordion />
      {/* //! Fifth Section */}
      <H2Title title="Teams">
        Meet the skilled and experienced team behind our successful digital marketing
        strategies
      </H2Title>
      <TeamCardsSection />
      {/* //! Sixth Section */}
      <H2Title title="Testimonials">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about
        Our Digital Marketing Services
      </H2Title>
      <TestimonialsSection />
      {/* //! Seventh Section */}
      <H2Title title="Contact Us">
        Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
      </H2Title>
      <ContactUsSection />
      <Footer />
    </Container>
  );
}
