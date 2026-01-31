import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import { Minus, Plus } from 'lucide-react';

const accordionItems = [
  {
    id: 1,
    title: 'Consultation',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 2,
    title: 'Research and Strategy Development',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 3,
    title: 'Implementation',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 4,
    title: 'Monitoring and Optimization',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 5,
    title: 'Reporting and Communication',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 6,
    title: 'Continual Improvement',
    text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
];

export default function WorkingProcessAcordion() {
  return (
    <div>
      <Accordion
        className="flex flex-col gap-7.5"
        type="single"
        collapsible
        defaultValue="item-1"
      >
        {accordionItems.map((item, idx) => (
          <AccordionItem
            key={item.id}
            className="data-[state=open]:bg-color1 border border-color2 px-15 py-10 rounded-[45px] shadow-[0_5px_0px_var(--color-color2)] bg-color3"
            value={item.title}
          >
            <AccordionTrigger className="group w-full flex flex-col md:flex-row items-center gap-5 md:justify-between">
              <div className="flex items-center gap-6.25">
                <p className="text-[60px]">0{idx + 1}</p>
                <p className="text-[30px] leading-tight">{item.title}</p>
              </div>
              <Plus className="group-data-[state=open]:hidden data-[state=closed]:block h-14.5 w-14.5 bg-color3 rounded-full border border-color2 cursor-pointer" />
              <Minus className="group-data-[state=closed]:hidden data-[state=open]:block h-14.5 w-14.5 bg-color3 rounded-full border border-color2 cursor-pointer" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="h-px bg-color2 my-7.5" />
              <p>{item.text} </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
