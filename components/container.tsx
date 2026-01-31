import { cn } from '@/lib/utils';
import type { ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export default function Container<T extends ElementType = 'div'>(
  props: ContainerProps<T>,
) {
  const { as, children, className, ...rest } = props;
  const Component = (as ?? 'div') as ElementType;

  return (
    <div className="mx-4 sm:mx-12 md:mx-12 xl:mx-25">
      <Component className={cn('w-full max-w-360 mx-auto', className)} {...rest}>
        {children}
      </Component>
    </div>
  );
}
