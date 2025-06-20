import { MetadataList } from "@/components/metadata";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Metadata",
  description: "Metadata page",
};

export default async function MetadataPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <main className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Metadata</h1>
      <MetadataList lang={lang} />
    </main>
  );
}
