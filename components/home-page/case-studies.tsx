import { ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import React from 'react';

const paragraphs = [
  {
    id: 1,
    href: '#',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    id: 2,
    href: '#',
    text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    id: 3,
    href: '#',
    text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
];

export default function CaseStudiesCard() {
  return (
    <Card className="bg-color2 py-17.5 px-15">
      <CardHeader className="p-0">
        <CardTitle className="flex gap-16 flex-col md:flex-row">
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={paragraph.id}>
              <div className="max-w-71.5">
                <p className="text-color3">{paragraph.text}</p>
                <a
                  href={paragraph.href}
                  className="flex items-center gap-3.75 text-color1"
                >
                  <p>Learn more</p>
                  <ArrowUpRight className="p-2 rounded-full w-10 h-10" />
                </a>
              </div>
              {paragraphs.length - 1 !== index && (
                <div className="h-px md:h-px-0 md:w-px bg-color3" />
              )}
            </React.Fragment>
          ))}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
