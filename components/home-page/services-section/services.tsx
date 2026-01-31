import ServiceCard, { Card } from './service-card';

const cards: Card[] = [
  {
    firstTitle: 'Search engine',
    secondTitle: 'optimization',
    imagePath: 'Card1.png',
    variant: 'default',
  },
  {
    firstTitle: 'Pay-per-click',
    secondTitle: 'advertising',
    imagePath: 'Card2.png',
    variant: 'green',
  },
  {
    firstTitle: 'Social Media',
    secondTitle: 'Marketing',
    imagePath: 'Card3.png',
    variant: 'black',
  },
  {
    firstTitle: 'Email',
    secondTitle: 'Marketing',
    imagePath: 'Card4.png',
    variant: 'default',
  },
  {
    firstTitle: 'Content',
    secondTitle: 'Creation',
    imagePath: 'Card5.png',
    variant: 'green',
  },
  {
    firstTitle: 'Analytics and',
    secondTitle: 'Tracking',
    imagePath: 'Card6.png',
    variant: 'black2',
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-25">
      {cards.map((card) => (
        <ServiceCard
          key={card.firstTitle}
          firstTitle={card.firstTitle}
          secondTitle={card.secondTitle}
          imagePath={card.imagePath}
          variant={card.variant}
        />
      ))}
    </div>
  );
}
