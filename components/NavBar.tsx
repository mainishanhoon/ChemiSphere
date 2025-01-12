'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { NavItems } from '@/constants/navItems';

export function DashboardMenu() {
  const pathname = usePathname();
  return (
    <>
      {NavItems.map((label) => (
        <Link
          href={label.href}
          key={label.name}
          className={cn(
            pathname == label.href
              ? 'bg-primary/20 text-primary'
              : 'bg-muted text-muted-foreground hover:text-foreground/5',
            'mt-1 flex items-center gap-2 rounded-lg px-4 py-1.5 text-lg font-bold tracking-wide transition-all hover:text-primary/70',
          )}
        >
          <label.icon size={30} strokeWidth={2.5} />
          {label.name}
        </Link>
      ))}
    </>
  );
}
