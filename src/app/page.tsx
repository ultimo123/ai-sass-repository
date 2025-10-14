import { caller } from '@/trpc/server';

export default async function Home() {
  const users = await caller.getUsers();
  console.log(users);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
