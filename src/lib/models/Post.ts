import { KsPost, WithSlug } from "@apee/lib/keystatic";
import { DocumentElement } from "@keystatic/core";

export type Post = {
  slug: string;
  title: string;
  content: DocumentElement[];
};

export async function hydratePost({
  slug,
  entry,
}: WithSlug<KsPost>): Promise<Post> {
  return {
    slug,
    ...entry,
    content: await entry.content(),
  };
}
