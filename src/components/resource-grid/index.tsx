import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ResourceLink = {
  href: string;
  label: ReactNode;
};

export type ResourceGridProps = {
  className?: string;
  children: ReactNode;
};

export type ResourceGridItemProps = {
  title: string;
  description: ReactNode;
  links: ResourceLink[];
  image: ReactNode;
  className?: string;
  linksWrapperClassName?: string;
};

function ResourceGridRoot({ className, children }: ResourceGridProps) {
  return (
    <div className={cn('full flex flex-col gap-20', className)}>
      {children}
    </div>
  );
}

function ResourceGridItem({
  title,
  description,
  links,
  image,
  className,
  linksWrapperClassName,
}: ResourceGridItemProps) {
  const linkItems = links.map(({ href, label }, index) => {
    const LinkComponent = href.startsWith('http') ? <Link href={href} className="flex flex-row items-center gap-1" target='_blank' rel='noopener noreferrer'>{label} <IconArrowUpRight className="w-4 h-4" /></Link> : <Link href={href} className="flex flex-row items-center gap-1">{label}</Link>;
    return <li key={`${href}-${index}`}>{LinkComponent}</li>;
  });
  return (
    <div className={cn('grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-20', className)}>
      <div className="sm:col-span-2 md:col-span-1 grid-cols-1">
        {image}
      </div>
      <h3 className="sr-only text-lg">{title}</h3>
      <div className="text-lg content-center">{description}</div>
      <ul
        className={cn(
          'flex flex-row flex-wrap items-start content-start gap-x-5 gap-y-2',
          linksWrapperClassName,
        )}
      >
        {linkItems}
      </ul>
    </div>
  );
}

export const ResourceGrid = Object.assign(ResourceGridRoot, {
  Item: ResourceGridItem,
});

