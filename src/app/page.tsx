import { Logout } from '@/components/logout';
import { requireAuth } from '@/lib/auth-utils';

export default async function Home() {
  await requireAuth();

  return (
    <div>
      protected server component <br />
      <Logout />
    </div>
  );
}
