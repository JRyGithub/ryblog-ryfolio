import SharedLayout from "../components/layout/sharedLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SharedLayout>
      {children}
    </SharedLayout>
  );
}
//mt-6 mx-auto md:max-w-2xl prose prose-sm md:prose-xl prose-slate dark:prose-invert