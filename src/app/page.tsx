import { Button } from '@/components/ui/button';
import { requireAuth } from '@/lib/auth-utils';

export default async function Home() {
  await requireAuth();

  return (
    <div>
      protected server component <br />
      <Button>Log out</Button>
    </div>
  );
}
