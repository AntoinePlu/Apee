"use client";
import routes from "@apee/app/routes";
import { FullWidthToggle } from "@apee/components/FullWidthToggle";
import List from "@apee/components/List";
import {
  BriefcaseIcon,
  CheckerboardShieldIcon,
  GearIcon,
  HyperlinkIcon,
  MagnifyingGlassIcon,
  PersonStackIcon,
  PlaneLandingIcon,
} from "@apee/components/icons";
import { Button } from "@apee/components/ui";
import Link from "next/link";

const MAIN_MENU = [
  { href: routes.home, label: "Home", icon: PlaneLandingIcon },
  { href: routes.about, label: "About", icon: PersonStackIcon },
  { href: routes.projects, label: "Projects", icon: BriefcaseIcon },
];

export default function Navigation() {
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
                <MagnifyingGlassIcon />
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

          <section className="flex-1">
            <h2>Collections</h2>
            <ul></ul>
          </section>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <Button variant="icon" size="icon-lg" title="Settings">
          <GearIcon className="h-6 w-6" />
        </Button>
        {process.env.NODE_ENV === "development" && (
          <Button variant="icon" size="icon-lg" asChild>
            <Link href={routes.admin.home} title="Go to admin">
              <CheckerboardShieldIcon className="h-6 w-6 fill-orange-solid" />
            </Link>
          </Button>
        )}
        <Button variant="icon" size="icon-lg" title="Permalink to this page">
          <HyperlinkIcon className="h-6 w-6" />
        </Button>
      </section>
    </nav>
  );
}
