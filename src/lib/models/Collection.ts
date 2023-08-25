import { KsCollection, WithSlug } from "@apee/lib/keystatic";
import { DocumentElement } from "@keystatic/core";

export type Collection = {
  slug: string;
  name: string;
  description: DocumentElement[];
};

export async function hydrateCollection({
  slug,
  entry,
}: WithSlug<KsCollection>): Promise<Collection> {
  return {
    slug,
    ...entry,
    description: await entry.description(),
  };
}
