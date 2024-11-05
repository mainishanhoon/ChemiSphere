'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled
          variant="outline"
          className="w-full border-2 border-primary"
        >
          <Loader
            strokeWidth={2}
            size={25}
            className="mr-2 animate-spin [animation-duration:3s]"
          />
          Please wait...
        </Button>
      ) : (
        <Button
          size="lg"
          className="w-full space-x-2 border-2 border-muted-foreground hover:border-primary hover:bg-primary/10"
          variant="outline"
        >
          <FcGoogle className="size-6" />
          <p className="font-bold">Sign In with Google</p>
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled
          variant="outline"
          className="w-full border-2 border-primary"
        >
          <Loader
            strokeWidth={2}
            size={25}
            className="mr-2 animate-spin [animation-duration:3s]"
          />
          Please wait...
        </Button>
      ) : (
        <Button
          size="lg"
          className="w-full space-x-2 border-2 border-muted-foreground hover:border-primary hover:bg-primary/10"
          variant="outline"
        >
          <GitHubLogoIcon className="size-6" />
          <p className="font-bold">Sign In with GitHub</p>
        </Button>
      )}
    </>
  );
}
