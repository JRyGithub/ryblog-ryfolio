import Image from 'next/image';
import Header from './components/header/header';
import TextLink from './components/textLink/textLink';

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-bl from-base-100 from-1% via-base-200 via-15% to-base-300 to-90% font-mono">
      <Header />
      <main className="flex flex-col flex-grow min-h-100 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={`https://www.robohash.org/${Math.floor(
              Math.random() * 100 + 1,
            )}?set=set4`}
            alt="A picture of cat!"
            width={400}
            height={400}
          />
          <h1 className="text-xl">404</h1>
          <span>Lots coming soon so watch this space 😃</span>
          <br></br>
          <TextLink href="/">Return Home</TextLink>
        </div>
      </main>
    </main>
  );
}
