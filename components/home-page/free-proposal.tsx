/* eslint-disable @next/next/no-img-element */
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function FreeProposal() {
  return (
    <Card className="bg-color3 border-none md:py-0">
      <CardHeader className="p-0 flex flex-col md:flex-row gap-7 md:justify-between items-center">
        <CardTitle className="flex flex-col gap-6.5 max-w-125">
          <h3>Let&apos;s make things happen</h3>
          <p className="flex items-center gap-3.75">
            Contact us today to learn more about how our digital marketing services
            can help your business grow and succeed online.
          </p>
          <Button className="w-fit">Get your free proposal</Button>
        </CardTitle>
        <CardDescription className="flex gap-3.75 items-center">
          <img className="scale-112" src="Things-happen.png" alt="Things Happen" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
