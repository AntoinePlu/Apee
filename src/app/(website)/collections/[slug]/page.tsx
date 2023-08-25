import CollectionGrid from "@apee/components/CollectionGrid";
import { Heading } from "@apee/components/ui";
import { keystatic } from "@apee/lib/keystatic";
import {
  hydrateAuthor,
  hydrateBookmark,
  hydrateCollection,
  loadCollection,
  loadModel,
} from "@apee/lib/models";
import { indexBy } from "@apee/lib/utils";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Link from "next/link";
import { notFound } from "next/navigation";

type CollectionPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const collections = await keystatic.collections.collections.list();

  return collections.map((slug) => ({ slug }));
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const collection = await loadModel(
    "collections",
    params.slug,
    hydrateCollection,
  );
  const bookmarks = await loadCollection("bookmarks", hydrateBookmark);
  const authors = await loadCollection("authors", hydrateAuthor);
  const authorsBySlug = indexBy(authors, "slug");

  if (collection === null) {
    notFound();
  }

  const collectionBookmarks = bookmarks.filter(
    (bookmark) => bookmark.collection === collection.slug,
  );

  return (
    <div className="flex flex-1 flex-col gap-y-32 overflow-auto px-32 py-20">
      <header className="grid grid-cols-2 px-24">
        <div className="flex flex-col gap-y-6">
          <Heading level={1}>{collection.name}</Heading>
          <DocumentRenderer
            document={collection.description}
            renderers={{
              block: {
                paragraph: ({ children }) => (
                  <p className="text-base text-white-11">{children}</p>
                ),
              },
              inline: {
                link: ({ children, href }) => (
                  <Link className="text-white" href={href}>
                    {children}
                  </Link>
                ),
              },
            }}
          />
        </div>
        <div />
      </header>

      <CollectionGrid
        collectionSlug={collection.slug}
        bookmarks={collectionBookmarks}
        authorsBySlug={authorsBySlug}
      />
    </div>
  );
}
