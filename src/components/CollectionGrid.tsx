import routes from "@apee/app/routes";
import { ExternalLinkIcon } from "@apee/components/icons";
import { Author, Bookmark } from "@apee/lib/models";
import Image from "next/image";
import Link from "next/link";

type Props = {
  bookmarks: Bookmark[];
  authorsBySlug: Record<string, Author>;
  collectionSlug: string;
};

export default function CollectionGrid({
  collectionSlug,
  authorsBySlug,
  bookmarks,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {bookmarks.map((bookmark) => {
        const author = authorsBySlug[bookmark.author ?? ""];
        return (
          <div key={bookmark.slug}>
            <Link href={routes.collectionItem(collectionSlug, bookmark.slug)}>
              {bookmark.picture ? (
                <Image
                  className="w-full rounded"
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
  );
}
