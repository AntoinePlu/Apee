"use client";
import routes from "@apee/app/routes";
import List from "@apee/components/List";
import {
  AdminIcon,
  BurgerIcon,
  CollectionIcon,
  LandingIcon,
  LinkIcon,
  MagnifyIcon,
  SettingIcon,
  SlideshowIcon,
} from "@apee/components/icons";
import { Button, IconButton, IconButtonLink } from "@apee/components/ui";

const MAIN_MENU = [
  { href: routes.home, label: "Home", icon: LandingIcon },
  { href: routes.about, label: "About", icon: SlideshowIcon },
  // { href: routes.projects, label: "Projects", icon: WorkIcon },
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
    <nav className="flex w-full flex-col justify-between p-4 pt-8">
      <section className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-6">
          <Button
            kind="primary"
            emphasis="medium"
            icon={MagnifyIcon}
            accel="/"
            className="[&>.label]:text-white-11"
          >
            Go to…
          </Button>

          <List items={MAIN_MENU} />

          <section className="flex-1 space-y-1">
            <header className="flex items-center gap-x-1 pl-1 tracking-wide">
              <CollectionIcon className="fill-white-9" />
              <h2 className="text-xs uppercase text-white-9">Collections</h2>
            </header>

            <List items={collectionMenu} />
          </section>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <IconButton
          size="large"
          emphasis="ghost"
          title="Settings"
          icon={SettingIcon}
          iconClassName="h-6 w-6"
        />
        {process.env.NODE_ENV === "development" && (
          <>
            <IconButtonLink
              size="large"
              emphasis="ghost"
              href={routes.admin.home}
              title="Go to admin"
              icon={AdminIcon}
              iconClassName="h-6 w-6 fill-orange-solid"
            />
            <IconButtonLink
              size="large"
              emphasis="ghost"
              href={routes.admin.showcase}
              title="Go to design system showcase"
              icon={BurgerIcon}
              iconClassName="h-5 w-5 fill-tomato-solid"
            />
          </>
        )}
        <IconButton
          size="large"
          emphasis="ghost"
          title="Permalink to this page"
          icon={LinkIcon}
          iconClassName="h-6 w-6"
        />
      </section>
    </nav>
  );
}
