'use client';

import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import TestimonialCard from './testimonial-card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export type TestimonialType = {
  name: string;
  role: string;
  companyName: string;
  quote: string;
};

const testimonials: TestimonialType[] = [
  {
    name: 'John Smith',
    role: 'Marketing Director',
    companyName: 'XYZ Corp',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
  },
  {
    name: 'John Smith',
    role: 'Marketing Director',
    companyName: 'XYZ Corp',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
  },
  {
    name: 'John Smith',
    role: 'Marketing Director',
    companyName: 'XYZ Corp',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on('select', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section className="flex flex-col bg-color2 rounded-[45px] pb-20 ">
      <Carousel
        setApi={setApi}
        opts={{ align: 'center', loop: true }}
        className="flex flex-col gap-31"
      >
        <CarouselContent className="">
          {testimonials.map((el, idx) => (
            <CarouselItem key={idx}>
              <TestimonialCard {...el} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-42">
          <CarouselPrevious className="bg-transparent border-none text-color3 scale-150 border" />
          <div className="flex gap-2 text-color3">
            <Star className="text-color1" />
            <Star className="text-color1" />
            <Star className="text-color1" />
            <Star className="text-color1" />
            <Star />
          </div>
          <CarouselNext className="bg-transparent border-none text-color3 scale-150" />
        </div>
      </Carousel>
    </section>
  );
}
