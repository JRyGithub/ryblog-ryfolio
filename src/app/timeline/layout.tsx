import Header from "../components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Header />
      <main className="flex flex-col flex-grow min-h-screen bg-base-100">{children}</main>
    </main>
  )
}