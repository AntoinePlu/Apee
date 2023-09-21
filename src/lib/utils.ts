export function indexBy<
  CollectionType extends Record<string, any>,
  KeyType extends keyof CollectionType,
>(collection: CollectionType[], key: KeyType): Record<string, CollectionType> {
  return Object.fromEntries(collection.map((item) => [item[key], item]));
}
