import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-xl text-muted">Page not found</p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/80"
      >
        Go Home
      </Link>
    </main>
  );
}
