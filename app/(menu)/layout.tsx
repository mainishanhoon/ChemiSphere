import Header from '@/components/Header';
import { DashboardMenu } from '@/components/NavBar';
import PageContainer from '@/components/PageContainer';
import { Dna } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid min-h-screen min-w-full md:grid-cols-[250px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-2 lg:h-[60px]">
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
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium">
              <DashboardMenu />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        <PageContainer scrollable>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </PageContainer>
      </div>
    </section>
  );
}
