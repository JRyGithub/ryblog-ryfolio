import Header from "../header/header";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-base-100 from-1% via-base-200 via-15% to-base-300 to-90%">
      <Header />
      <main className="flex flex-col flex-grow min-h-screen">
        {children}
      </main>
    </main>
  );
}
