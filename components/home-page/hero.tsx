/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';

type Props = {
  navbar: { href: string; title: string }[];
};

export default function Hero({ navbar }: Props) {
  return (
    <div className="flex flex-col items-center gap-17.5">
      <nav className="w-full flex items-center justify-between">
        <img
          className="hidden dark:block max-w-25 md:max-w-34.5 lg:max-w-54.5 w-full"
          src="Logo-dark.png"
          alt="Logo-light"
        />
        <img
          className="block dark:hidden max-w-25 md:max-w-34.5 lg:max-w-54.5 w-full"
          src="Logo-light.png"
          alt="Logo-light"
        />
        <ul className="hidden md:flex items-center gap-3 xl:gap-10 text-[20px] ml-auto">
          {navbar.map((el) => (
            <li key={el.href}>
              <Link href={el.href}>{el.title}</Link>
            </li>
          ))}
          <li>
            <Button className="hidden xl:block" size="default" variant="secondary">
              Request a quote
            </Button>
            <Button className="block xl:hidden" size="sm" variant="secondary">
              Request a quote
            </Button>
          </li>
        </ul>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navbar.map((el) => (
                <DropdownMenuItem asChild key={el.href}>
                  <Link href={el.href}>{el.title}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <Button size="xs" variant="secondary">
                  Request a quote
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <section className="w-full flex flex-col md:flex-row items-center gap-10 md:justify-between pb-7">
        {/* //! left (top) */}
        <div className="flex flex-col gap-8.75  max-w-132.75">
          <h1>Navigating the digital landscape for success</h1>
          <p className="text-[20px] leading-7">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>
          <Button>Book a consultation</Button>
        </div>
        {/* //! right (bottom) */}
        <div className="flex justify-center md:block">
          <img src="Illustration.png" alt="Illustration" />
        </div>
      </section>
      <section className="w-full grayscale flex flex-row justify-center md:justify-between flex-wrap gap-3 items-center">
        <img src="Amazon.png" alt="Amazon" />
        <img src="Dribble.png" alt="Dribble" />
        <img src="HubSpot.png" alt="HubSpot" />
        <img src="Notion.png" alt="Notion" />
        <img src="Netflix.png" alt="Netflix" />
        <img src="Zoom.png" alt="Zoom" />
      </section>
    </div>
  );
}
