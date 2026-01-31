/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

export default function ContactUsSection() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between bg-color3 md:pl-25 py-15 rounded-[45px] items-center overflow-hidden mb-35">
      {/* //! Left side / Top side */}
      <form className="flex flex-1 flex-col gap-10 max-w-139 " action="">
        <RadioGroup className="flex" defaultValue="option-one">
          <div className="flex items-center gap-3">
            <RadioGroupItem
              className="text-color1 border border-color2"
              value="option-one"
              id="option-one"
            />
            <Label htmlFor="option-one">Say Hi</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem
              className="text-color1 border border-color2"
              value="option-two"
              id="option-two"
            />
            <Label htmlFor="option-two">Get a Quote</Label>
          </div>
        </RadioGroup>
        <div className="flex flex-col gap-6.25">
          <Field className="flex flex-col gap-1.25">
            <FieldLabel htmlFor="name">Name*</FieldLabel>
            <Input
              className="bg-white py-4.5 px-7.5 border border-color2"
              id="name"
              placeholder="Name"
              required={true}
            />
          </Field>
          <Field className="flex flex-col gap-1.25">
            <FieldLabel htmlFor="email">Email*</FieldLabel>
            <Input
              className="bg-white py-4.5 px-7.5 border border-color2"
              id="email"
              placeholder="Email"
              required={true}
            />
          </Field>
          <Field className="flex flex-col gap-1.25">
            <FieldLabel htmlFor="message">Message*</FieldLabel>
            <Textarea
              className="bg-white py-4.5 px-7.5 border border-color2 min-h-47.5 resize-none"
              id="message"
              placeholder="Message"
              required={true}
            />
          </Field>
        </div>
        <Button>Send Message</Button>
      </form>
      {/* //! Right side / Bottom side */}
      <div className="md:absolute md:right-0 md:translate-x-80">
        <img className="scale-90 " src="ContactUs.png" alt="Contact Us image" />
      </div>
    </section>
  );
}
