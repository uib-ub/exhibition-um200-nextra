import { Metadata } from 'next';
import COLLECTIONS from "../../../../.canopy/collections.json";
import Link from 'next/link';

/* export async function generateStaticParams() {
  const data = COLLECTIONS.items.slice(0, 10);
  return data
} */

export const metadata: Metadata = {
  title: "Works",
  description: "Works",
};

export default async function WorksPage({ params }: { params: { lang: string } }) {
  const lang = (await params).lang;
  return (
    <div className="max-w-[1200px] mx-auto my-10 px-4">
      <h1 className="text-2xl font-bold mb-4">{lang === 'no' ? 'Verker' : 'Works'}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COLLECTIONS[0].items.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 hover:line-clamp-none">{item.label.none[0]}</h2>
            <div className="mt-4">
              <Link
                href={`/works/${encodeURIComponent(item.label.none[0])}`}
                locale="false"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
