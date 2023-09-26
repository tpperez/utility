import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home page title',
  description: 'description for home page',
};

export default function Home() {
  return (
    <main>
      <div>
        <p className='tw-text-3xl tw-text-green-500'>home</p>
      </div>
    </main>
  );
}
