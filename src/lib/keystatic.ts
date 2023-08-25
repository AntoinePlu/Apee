import { Entry, createReader } from "@keystatic/core/reader";
import {
  default as config,
  default as keystaticConfig,
} from "keystatic.config";

export const keystatic = createReader(process.cwd(), config);

type Singletons = (typeof keystaticConfig)["singletons"];
type Singleton<T extends keyof Singletons> = Entry<Singletons[T]>;
type Collections = (typeof keystaticConfig)["collections"];
type Collection<T extends keyof Collections> = Entry<Collections[T]>;

export type KsHomepage = Singleton<"homepage">;
export type KsAboutPage = Singleton<"aboutPage">;

export type KsCollection = Collection<"collections">;
export type KsAuthor = Collection<"authors">;
export type KsBookmark = Collection<"bookmarks">;
export type KsTag = Collection<"tags">;

export type WithSlug<T> = {
  slug: string;
  entry: T;
};
