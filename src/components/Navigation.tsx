"use client";
import routes from "@apee/app/routes";
import { FullWidthToggle } from "@apee/components/FullWidthToggle";
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
import { cn } from "@apee/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MAIN_MENU = [
  { route: routes.home, label: "Home", icon: PlaneLandingIcon },
  { route: routes.about, label: "About", icon: PersonStackIcon },
  { route: routes.projects, label: "Projects", icon: BriefcaseIcon },
];

export default function Navigation() {
  const pathname = usePathname();

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

          <ul className="flex flex-col gap-y-1">
            {MAIN_MENU.map((menuItem) => (
              <NavigationItem
                {...menuItem}
                active={menuItem.route === pathname}
                key={menuItem.label}
              />
            ))}
          </ul>

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

type NavigationItemProps = {
  active: boolean;
  route: string;
  label: string;
  icon: React.ElementType;
};

function NavigationItem({
  active,
  label,
  route,
  icon: Icon,
}: NavigationItemProps) {
  return (
    <li>
      <Link
        href={route}
        className={cn(
          "flex h-9 items-center gap-x-2.5 rounded-lg px-2.5 py-2",
          {
            "bg-gray-component2 text-gray-text-high": active,
          },
        )}
      >
        <Icon />
        <span>{label}</span>
      </Link>
    </li>
  );
}
