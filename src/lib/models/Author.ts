import { KsAuthor, WithSlug } from "@apee/lib/keystatic";

export type Author = {
  slug: string;
  name: string;
  picture: string | null;
};

export async function hydrateAuthor({
  slug,
  entry,
}: WithSlug<KsAuthor>): Promise<Author> {
  return {
    slug,
    ...entry,
  };
}
