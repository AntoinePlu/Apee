import { KsBookmark, WithSlug } from "@apee/lib/keystatic";
import { DocumentElement } from "@keystatic/core";
import { parseISO } from "date-fns";

export type Bookmark = {
  slug: string;
  name: string;
  url: string | null;
  collection: string | null;
  curatedOn: Date | null;
  postedOn: Date | null;
  author: string | null;
  description: DocumentElement[];
  picture: string | null;
  tags: readonly (string | null)[];
};

export async function hydrateBookmark({
  slug,
  entry,
}: WithSlug<KsBookmark>): Promise<Bookmark> {
  return {
    slug,
    ...entry,
    curatedOn: entry.curatedOn ? parseISO(entry.curatedOn) : null,
    postedOn: entry.postedOn ? parseISO(entry.postedOn) : null,
    description: await entry.description(),
  };
}
