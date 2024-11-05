import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function useCurrentUser() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  }

  return session;
}
