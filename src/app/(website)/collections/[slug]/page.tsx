import routes from "@apee/app/routes";
import { ExternalLinkIcon } from "@apee/components/icons";
import { Heading } from "@apee/components/ui";
import { keystatic } from "@apee/lib/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Image from "next/image";
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
  const collection = await keystatic.collections.collections.read(params.slug);
  const bookmarks = await keystatic.collections.bookmarks.all();
  const authors = await keystatic.collections.authors.all();
  const authorsBySlug = Object.fromEntries(
    authors.map(({ slug, entry }) => [slug, entry]),
  );

  if (collection === null) {
    notFound();
  }

  const collectionBookmarks = bookmarks.filter(
    (bookmark) => bookmark.entry.collection === params.slug,
  );

  const description = await collection.description();

  return (
    <div className="flex flex-1 flex-col gap-y-32 overflow-auto px-32 py-20">
      <header className="grid grid-cols-2 px-24">
        <div className="flex flex-col gap-y-6">
          <Heading level={1}>{collection.name}</Heading>
          <DocumentRenderer
            document={description}
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

      <div className="grid grid-cols-3 gap-6">
        {collectionBookmarks.map(({ slug, entry: bookmark }) => {
          const author = authorsBySlug[bookmark.author ?? ""];
          return (
            <div key={slug}>
              <Link href={routes.collectionItem(params.slug, slug)}>
                {bookmark.picture ? (
                  <Image
                    className="w-full rounded-lg"
                    src={bookmark.picture}
                    width={300}
                    height={200}
                    alt={""}
                  />
                ) : (
                  <div className="">No picture</div>
                )}
              </Link>
              {author ? (
                <p className="flex items-center gap-x-2 p-2 text-white-11">
                  <span>
                    By{" "}
                    <strong className="font-semibold text-white">
                      {author.name}
                    </strong>
                  </span>
                  <Link href={bookmark.url || ""}>
                    <ExternalLinkIcon />
                  </Link>
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
