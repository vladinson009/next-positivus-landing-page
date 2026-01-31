/* eslint-disable @next/next/no-img-element */
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle } from '../ui/card';

const team = [
  {
    name: 'John Smith',
    title: 'CEO and Founder',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    avatar: 'Avatar1',
  },
  {
    name: 'Jane Doe',
    title: 'Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    avatar: 'Avatar2',
  },
  {
    name: 'Michael Brown',
    title: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    avatar: 'Avatar3',
  },
  {
    name: 'Emily Johnson',
    title: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    avatar: 'Avatar4',
  },
  {
    name: 'Brian Williams',
    title: 'Social Media Specialist',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    avatar: 'Avatar5',
  },
  {
    name: 'Sarah Kim',
    title: 'Content Creator',
    description: `2+ years of experience in writing and editing \n Skilled in creating compelling, SEO-optimized content for various industries`,
    avatar: 'Avatar6',
  },
];

export default function TeamCardsSection() {
  return (
    <section className="flex flex-col items-center md:items-end gap-10">
      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-10">
        {team.map((member) => (
          <Card
            key={member.name}
            className="shadow-[0_5px_0px_var(--color-color2)] w-96.75 px-8.75 py-10"
          >
            <CardHeader className="p-0 flex flex-row justify-between items-center">
              <CardTitle className="flex flex-col gap-7 w-79.25">
                <div className="flex">
                  <div className="flex gap-5 relative w-full">
                    <div className="flex w-24.5 h-24.5 drop-shadow-[9px_8px_0px_rgba(0,0,0,1)]">
                      <img
                        className="bg-color1 w-full h-full object-cover mask-[url('/Mask.svg')] mask-no-repeat mask-contain mask-center [-webkit-mask-image:url('/Mask.svg')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [-webkit-mask-position:center]"
                        src={`${member.avatar}.png`}
                        alt={member.title}
                      />
                    </div>
                    <div className="flex flex-col justify-end">
                      <h4 className="font-bold p-0">{member.name}</h4>
                      <p className="font-normal ">{member.title}</p>
                    </div>
                    <img
                      className="w-[34px] h-[34px] absolute right-0"
                      src="In.png"
                      alt="Linkedin Logo"
                    />
                  </div>
                </div>
                <div className="h-px border border-color2 opacity-50" />
                <p className="font-normal whitespace-pre-line">
                  {member.description}
                </p>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Button className="w-fit px-15">See all team</Button>
    </section>
  );
}
