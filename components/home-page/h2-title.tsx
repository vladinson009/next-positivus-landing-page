import { PropsWithChildren } from 'react';

type Props = {
  title: string;
} & PropsWithChildren;

export default function H2Title({ title, children }: Props) {
  return (
    <div className="flex md:flex-row flex-col gap-2 mb-5 md:gap-15 mt-35 md:mb-20">
      <h2 className="text-color2 bg-color1">{title}</h2>
      <p className="text-color2 max-w-145">{children}</p>
    </div>
  );
}
