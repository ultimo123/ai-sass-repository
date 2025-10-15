'use client';

import { Button } from './ui/button';
import { authClient } from '@/lib/auth-client';

export function Logout() {
  return (
    <div>
      <Button onClick={() => authClient.signOut()}>Log out</Button>
    </div>
  );
}
