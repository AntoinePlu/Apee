import { WithSlug, keystatic } from "@apee/lib/keystatic";

export * from "./Author";
export * from "./Bookmark";
export * from "./Collection";

export async function loadModel<KsType, ModelType>(
  collectionName: keyof typeof keystatic.collections,
  slug: string,
  hydrate: (item: WithSlug<KsType>) => Promise<ModelType>,
): Promise<ModelType | null> {
  const item = await keystatic.collections[collectionName].read(slug);

  if (item === null) {
    return null;
  }

  return hydrate({ slug, entry: item as KsType });
}

export async function loadCollection<KsType, ModelType>(
  collectionName: keyof typeof keystatic.collections,
  hydrate: (item: WithSlug<KsType>) => Promise<ModelType>,
): Promise<Array<ModelType>> {
  const items = (await keystatic.collections[collectionName].all()) as Array<
    WithSlug<KsType>
  >;
  return Promise.all(items.map(hydrate));
}
