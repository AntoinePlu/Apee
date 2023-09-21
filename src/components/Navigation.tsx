"use client";
import routes from "@apee/app/routes";
import FullWidthToggle from "@apee/components/FullWidthToggle";
import List from "@apee/components/List";
import {
  AdminIcon,
  BurgerIcon,
  LandingIcon,
  LinkIcon,
  MagnifyIcon,
  SettingIcon,
  SlideshowIcon,
  SmallCollectionIcon,
  WorkIcon,
} from "@apee/components/icons";
import { Button, IconButton, IconButtonLink } from "@apee/components/ui";

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
          <Button icon={MagnifyIcon} accel="/">
            Search
          </Button>

          <List items={MAIN_MENU} />

          <section className="flex-1 space-y-1">
            <header className="flex items-center gap-x-1 pl-1.5 tracking-wide">
              <SmallCollectionIcon className="fill-white-9" />
              <h2 className="text-xs uppercase text-white-9">Collections</h2>
            </header>

            <List items={collectionMenu} />
          </section>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <IconButton
          size="large"
          title="Settings"
          icon={SettingIcon}
          iconClassName="h-6 w-6"
        />
        {process.env.NODE_ENV === "development" && (
          <>
            <IconButtonLink
              size="large"
              href={routes.admin.home}
              title="Go to admin"
              icon={AdminIcon}
              iconClassName="h-6 w-6 fill-orange-solid"
            />
            <IconButtonLink
              size="large"
              href={routes.admin.showcase}
              title="Go to design system showcase"
              icon={BurgerIcon}
              iconClassName="h-6 w-6 fill-tomato-solid"
            />
          </>
        )}
        <IconButton
          size="large"
          title="Permalink to this page"
          icon={LinkIcon}
          iconClassName="h-6 w-6"
        />
      </section>
    </nav>
  );
}
