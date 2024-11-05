import {
  Atom,
  LayoutGrid,
  MessageSquareText,
  Microscope,
  Network,
  Settings,
} from 'lucide-react';

export const NavItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutGrid,
  },
  {
    name: 'Molecules Bank',
    href: '/moleculesBank',
    icon: Atom,
  },
  {
    name: 'Models',
    href: '/models',
    icon: Network,
  },
  {
    name: 'Research',
    href: '/research',
    icon: Microscope,
  },
  {
    name: 'Chat',
    href: '/chat',
    icon: MessageSquareText,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];
