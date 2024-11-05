import { Dna, LogOut, Menu, MessageSquareText } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { DashboardMenu } from '@/components/NavBar';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { signOut } from '@/lib/auth';
import Form from 'next/form';
import { useCurrentUser } from '@/lib/hooks';

export default async function Header() {
  const session = await useCurrentUser();
  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink md:hidden" size="icon" variant="outline">
            <Dna size={35} className="rounded-sm bg-primary p-0.5 text-white" />{' '}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-70 flex flex-col">
          <SheetTitle>
            <Link
              href="/"
              className="mx-auto flex items-center gap-2 text-2xl font-black"
            >
              <Dna
                size={35}
                className="rounded-sm bg-primary p-0.5 text-white"
              />
              <p className="tracking-wide">
                Chemi
                <span className="tracking-normal text-primary">Sphere</span>
              </p>
            </Link>
          </SheetTitle>
          <nav className="mt-5 grid gap-2">
            <DashboardMenu />
          </nav>
        </SheetContent>
      </Sheet>

      <div className="ml-auto flex items-center gap-x-5">
        <div className="relative flex size-7 cursor-pointer items-center justify-center rounded-full">
          <Button variant="outline" size="icon">
            <MessageSquareText
              size={40}
              color="hsl(var(--muted-foreground))"
              className="aspect-square p-1.5"
            />
          </Button>
          <div className="absolute -right-1.5 -top-1.5 size-2 animate-ping rounded-full bg-red-300" />
        </div>

        <ThemeToggle />

        <Label className="font-mont flex flex-col -space-y-1 font-bold">
          <p className="text-lg text-accent-foreground">{session?.user?.name}</p>
          <p className="text-right text-sm text-muted-foreground">
            Drug Researcher
          </p>
        </Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon">
              <Image
                src={session?.user?.image as string}
                alt="Profile Image"
                width={75}
                height={75}
                className="size-full rounded-xl"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Form
                action={async () => {
                  'use server';
                  await signOut();
                }}
                className="w-full"
              >
                <Button className="w-full space-x-1" variant="ringHover">
                  <LogOut
                    strokeWidth={2.5}
                    size={20}
                    color="hsl(var(--background))"
                  />
                  <p className="font-bold tracking-wide">Sign Out</p>
                </Button>
              </Form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
