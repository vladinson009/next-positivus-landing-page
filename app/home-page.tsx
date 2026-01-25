import H2Title from '@/components/h2-title';
import Container from '../components/container';
import Hero from '@/components/home-page/hero';
import Services from '@/components/home-page/services';
import FreeProposal from '@/components/home-page/free-proposal';
import CaseStudiesCard from '@/components/home-page/case-studies';
import WorkingProcessAcordion from '@/components/home-page/working-process-accordion';

const navbar = [
  { href: 'about-us', title: 'About us' },
  { href: 'services', title: 'Services' },
  { href: 'use-cases', title: 'Use Cases' },
  { href: 'pricing', title: 'Pricing' },
  { href: 'blog', title: 'Blog' },
];

export default function HomePage() {
  return (
    <Container className="mt-15">
      {/* //! First Section */}
      <Hero navbar={navbar} />
      <H2Title title="Services">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </H2Title>
      <Services />
      <FreeProposal />
      <H2Title title="Case Studies">
        Explore Real-Life Examples of Our Proven Digital Marketing Success through
        Our Case Studies
      </H2Title>
      <CaseStudiesCard />
      <H2Title title="Our Working Process">
        Step-by-Step Guide to Achieving <br /> Your Business Goals
      </H2Title>
      <WorkingProcessAcordion />
      <H2Title title="Teams">
        Meet the skilled and experienced team behind our successful digital marketing
        strategies
      </H2Title>
    </Container>
  );
}
