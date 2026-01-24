/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

export type Card = {
  firstTitle: string;
  secondTitle: string;
  imagePath: string;
  variant: 'default' | 'green' | 'black' | 'black2';
};

const variants = {
  default: {
    background: 'bg-color3',
    h3: 'bg-color1',
    button: 'bg-color2 text-color1',
    buttonText: 'text-color2',
  },
  green: {
    background: 'bg-color1',
    h3: 'bg-color3',
    button: 'bg-color2 text-color1',
    buttonText: 'text-color2',
  },
  black: {
    background: 'bg-color2',
    h3: 'bg-color3',
    button: 'bg-color3 text-color2',
    buttonText: 'text-color3',
  },
  black2: {
    background: 'bg-color2',
    h3: 'bg-color1',
    button: 'bg-color3 text-color2',
    buttonText: 'text-color3',
  },
};

export default function ServiceCard({
  firstTitle,
  secondTitle,
  imagePath,
  variant = 'default',
}: Card) {
  const currentVariant = variants[variant];

  return (
    <Card className={currentVariant.background}>
      <CardHeader className="p-0 flex flex-row justify-between items-center">
        <CardTitle className="flex flex-col gap-23.25 max-w-55.25">
          <div className="flex flex-col items-start">
            <h3 className={currentVariant.h3}>{firstTitle}</h3>
            <h3 className={currentVariant.h3}>{secondTitle}</h3>
          </div>
          <a href="#" className="flex items-center gap-3.75">
            <ArrowUpRight
              className={`p-2 rounded-full w-10 h-10 ${currentVariant.button}`}
            />
            <p className={currentVariant.buttonText}>Learn more</p>
          </a>
        </CardTitle>
        <CardDescription className="flex gap-3.75 items-center">
          <img src={imagePath} alt={firstTitle} />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
