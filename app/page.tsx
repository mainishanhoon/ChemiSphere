import AuthModal from '@/components/AuthDialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <AuthModal />
      <Button variant="ringHover">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
}
