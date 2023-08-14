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
export default async function CollectionPage({ params }: CollectionPageProps) {
  const collection = await keystatic.collections.collections.read(params.slug);
  const bookmarks = await keystatic.collections.bookmarks.all();

  if (collection === null) {
    notFound();
  }

  const collectionBookmarks = bookmarks.filter(
    (bookmark) => bookmark.entry.collection === params.slug,
  );

  const description = await collection.description();

  return (
    <div className="flex flex-1 flex-col gap-y-32 overflow-auto px-32 py-20">
      <header className="grid grid-cols-4 px-24">
        <div className="col-span-3 flex flex-col gap-y-6">
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
        {collectionBookmarks.map((bookmark) => (
          <div key={bookmark.slug}>
            {bookmark.entry.picture ? (
              <Image
                className="rounded-lg"
                src={bookmark.entry.picture}
                width={300}
                height={200}
                alt={""}
              />
            ) : (
              <div className="">No picture</div>
            )}
            <p className="p-2 text-white-11">By {bookmark.entry.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
