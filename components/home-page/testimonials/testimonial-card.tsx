/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { TestimonialType } from './testimonials-section';

export default function TestimonialCard({
  companyName,
  name,
  quote,
  role,
}: TestimonialType) {
  return (
    <Card
      className="
    border-none
    bg-transparent
    max-w-151.5
    mx-auto
    
    "
    >
      <CardContent
        className="
            bg-color1 text-color2
             md:mask-[url('/Bubble.svg')]
             md:mask-no-repeat
             md:md:mask-contain
             md:mask-center
             mask-cover
              py-13 px-12
              [-webkit-mask-image:url('/Bubble.svg')]
              pb-18
              
              "
      >
        &quot;{quote}&quot;
      </CardContent>
      <CardHeader>
        <h4 className="p-0 text-color1">{name}</h4>
        <p className="text-color3">
          {role} at {companyName}
        </p>
      </CardHeader>
    </Card>
  );
}
