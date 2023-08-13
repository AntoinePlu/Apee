"use client";
import routes from "@apee/app/routes";
import { FullWidthToggle } from "@apee/components/FullWidthToggle";
import List from "@apee/components/List";
import {
  AdminIcon,
  CollectionIcon,
  LandingIcon,
  LinkIcon,
  MagnifyIcon,
  SettingIcon,
  SlideshowIcon,
  WorkIcon,
} from "@apee/components/icons";
import { Button } from "@apee/components/ui";
import Link from "next/link";

const MAIN_MENU = [
  { href: routes.home, label: "Home", icon: LandingIcon },
  { href: routes.about, label: "About", icon: SlideshowIcon },
  { href: routes.projects, label: "Projects", icon: WorkIcon },
];

type Collection = {
  slug: string;
  name: string;
};

type NavigationProps = {
  collections: Collection[];
};

export default function Navigation({ collections }: NavigationProps) {
  const collectionMenu = collections.map(({ slug, name }) => ({
    href: routes.collection(slug),
    label: name,
  }));
  return (
    <nav className="flex w-64 flex-col justify-between px-4 pb-4 pt-8">
      <section className="flex flex-col gap-y-4">
        <div>
          <FullWidthToggle />
        </div>

        <div className="flex flex-col gap-y-6">
          <form>
            <div className="flex h-9 items-center justify-between gap-x-2.5 rounded-md border border-gray-border1 bg-gray-component1 p-2 pl-2.5 text-base/5 leading-none text-gray-text-low">
              <div>
                <MagnifyIcon />
              </div>
              <input
                type="search"
                placeholder="Search"
                name="search"
                className="inline-block appearance-none bg-transparent"
              />
            </div>
          </form>

          <List items={MAIN_MENU} />

          <section className="flex-1 space-y-1">
            <header className="flex items-center gap-x-1 pl-2 tracking-wide">
              <CollectionIcon className="fill-white-9" />
              <h2 className="text-xs uppercase text-white-9">Collections</h2>
            </header>

            <List items={collectionMenu} />
          </section>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <Button variant="icon" size="icon-lg" title="Settings">
          <SettingIcon className="h-6 w-6" />
        </Button>
        {process.env.NODE_ENV === "development" && (
          <Button variant="icon" size="icon-lg" asChild>
            <Link href={routes.admin.home} title="Go to admin">
              <AdminIcon className="h-6 w-6 fill-orange-solid" />
            </Link>
          </Button>
        )}
        <Button variant="icon" size="icon-lg" title="Permalink to this page">
          <LinkIcon className="h-6 w-6" />
        </Button>
      </section>
    </nav>
  );
}
