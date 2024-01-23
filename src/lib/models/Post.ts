import { KsPost, WithSlug } from "@apee/lib/keystatic";

export type Post = {
  slug: string;
  title: string;
};

export async function hydratePost({
  slug,
  entry,
}: WithSlug<KsPost>): Promise<Post> {
  return {
    slug,
    ...entry,
  };
}
