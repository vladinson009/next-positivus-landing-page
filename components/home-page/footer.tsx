/* eslint-disable @next/next/no-img-element */
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export default function Footer() {
  return (
    <section className="flex flex-col gap-12.5 bg-black rounded-t-[45px] px-15 py-5 md:py-13.75">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
        <img className="w-45 h-7.25" src="Logo-dark.png" alt="Logo dark" />
        <nav className="flex justify-center flex-wrap md:flex-nowrap gap-10">
          <Link className="text-color3/75 underline" href="/about-us">
            About us
          </Link>
          <Link className="text-color3/75 underline" href="/services">
            Services
          </Link>
          <Link className="text-color3/75 underline" href="/use-cases">
            Use Cases
          </Link>
          <Link className="text-color3/75 underline" href="/pricing">
            Pricing
          </Link>
          <Link className="text-color3/75 underline" href="/blog">
            Blog
          </Link>
        </nav>
        <div className="flex gap-5">
          <Linkedin className="bg-color3 text-color2 rounded-full h-7.5 w-7.5 p-1" />
          <Facebook className="bg-color3 text-color2 rounded-full h-7.5 w-7.5 p-1" />
          <Twitter className="bg-color3 text-color2 rounded-full h-7.5 w-7.5 p-1" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        {/* //! Left side / Top */}
        <div className="flex flex-col text-background gap-6.75">
          <h4 className="p-0 text-primary bg-color1 w-fit rounded-[7px] px-1">
            Contact us:
          </h4>
          <div className="flex flex-col gap-5">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <div>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stradust State 12345</p>
            </div>
          </div>
        </div>
        {/* //! Right side / Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-color2 rounded-[14px]">
          <form
            className="flex flex-col md:flex-row items-center gap-5 px-10 py-5 md:py-14.5"
            action=""
          >
            <Label htmlFor="subscribe-email" className="sr-only">
              Emal
            </Label>
            <Input
              className="h-17 rounded-[14px] placeholder:text-[20px]"
              id="subscribe-email"
              placeholder="Email"
            />
            <Button className="h-17 bg-color1 text-color2">Subscribe to news</Button>
          </form>
        </div>
      </div>
      <div className="w-px md:w-0 md:h-px bg-color3/50" />
      <div className="text-background flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:max-w-[50%] lg:max-w-[60%]">
        <p>@ 2023 Positivus. All Rights Reserved.</p>
        <Link className="underline" href="/policy">
          Privacy Policy
        </Link>
      </div>
    </section>
  );
}
