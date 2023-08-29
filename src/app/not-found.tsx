import Image from 'next/image';
import Header from './components/header/header';
import TextLink from './components/textLink/textLink';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#969393" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
            priority
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
          />
          <h1 className="text-xl">404</h1>
          <span className="text-md text-center">
            Lots coming soon so watch this space 😃
          </span>
          <br></br>
          <TextLink href="/">Return Home</TextLink>
        </div>
      </main>
    </main>
  );
}
