import H2Title from '@/components/h2-title';
import Container from '../components/container';
import Hero from '@/components/home-page/hero';
import Services from '@/components/home-page/services';

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
    </Container>
  );
}
