import Link from 'next/link';
import { IconArrowDown } from '@tabler/icons-react';

export function JumpToStories({ title }: { title: string }) {
  return (
    <aside>
      <Link href={'#historier'} className="flex items-center gap-2">Hopp til historier om {title} <IconArrowDown className="w-4 h-4" /></Link>
    </aside>
  )
}