import { PropsWithChildren } from 'react';

type Props = {
  title: string;
} & PropsWithChildren;

export default function H2Title({ title, children }: Props) {
  return (
    <div className="flex gap-10 mt-35 mb-20">
      <h2 className="text-color2 bg-color1">{title}</h2>
      <p className="text-color2 max-w-145">{children}</p>
    </div>
  );
}
