const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  collection: (slug: string) => `/collections/${slug}`,
  admin: {
    home: "/keystatic",
  },
} as const;

export default routes;
