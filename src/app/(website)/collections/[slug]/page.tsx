import BookmarkFilter from "@apee/components/BookmarkFilter";
import CollectionGrid from "@apee/components/CollectionGrid";
import CollectionHeader from "@apee/components/CollectionHeader";
import { keystatic } from "@apee/lib/keystatic";
import {
  hydrateAuthor,
  hydrateBookmark,
  hydrateCollection,
  loadCollection,
  loadModel,
} from "@apee/lib/models";
import { indexBy } from "@apee/lib/utils";
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
      <CollectionHeader collection={collection} />
      <BookmarkFilter bookmarks={bookmarks} />
      <CollectionGrid
        collectionSlug={collection.slug}
        bookmarks={collectionBookmarks}
        authorsBySlug={authorsBySlug}
      />
    </div>
  );
}
