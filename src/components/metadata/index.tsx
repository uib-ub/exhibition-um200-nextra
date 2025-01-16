import Link from 'next/link';
import FACETS from "../../../.canopy/facets.json";

export async function MetadataList(params: { lang: string }) {
  const { lang } = await params;
  const facets = FACETS;

  return (
    <div className="container prose dark:prose-invert">
      <ul>
        {facets.map((facet) => (
          <div key={facet.slug}>
            <h2>{facet.label}</h2>
            <ul className="list-none not-prose">
              {facet.values.map((value) => (
                <li key={value.slug}>
                  <Link className="text-blue-500 underline underline-offset-2" href={`/${lang}/search?${facet.slug}=${value.slug}`}>{value.value}</Link> ({value.doc_count})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
