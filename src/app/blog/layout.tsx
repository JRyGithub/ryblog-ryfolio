import SharedLayout from "../components/layout/sharedLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SharedLayout>
        {children}
    </SharedLayout>
  );
}