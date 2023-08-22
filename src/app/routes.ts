const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  collection: (slug: string) => `/collections/${slug}`,
  collectionItem: (collectionSlug: string, itemSlug: string) =>
    `/collections/${collectionSlug}/${itemSlug}`,
  admin: {
    home: "/keystatic",
    showcase: "/showcase",
  },
} as const;

export default routes;
