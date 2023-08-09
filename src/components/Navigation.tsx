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
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-64 flex flex-col justify-between px-4 pt-8 pb-4">
      <section className="flex flex-col gap-y-4">
        <div>
          <FullWidthToggle />
        </div>

        <div className="flex flex-col gap-y-6">
          <form>
            <div className="h-9 leading-none text-base/5 flex justify-between items-center gap-x-2.5 text-gray-text-low bg-gray-component1 border border-gray-border1 rounded-md p-2 pl-2.5">
              <div>
                <MagnifyingGlassIcon />
              </div>
              <input
                type="search"
                placeholder="Search"
                name="search"
                className="appearance-none bg-transparent inline-block"
              />
            </div>
          </form>

          <ul className="flex flex-col gap-y-1">
            <li className="h-9 py-2 px-2.5 flex items-center gap-x-2.5 rounded-lg text-gray-text-high bg-gray-component2">
              <PlaneLandingIcon />
              <span>Home</span>
            </li>
            <li className="h-9 py-2 px-2.5 flex items-center gap-x-2.5 rounded-lg">
              <PersonStackIcon />
              <span>About</span>
            </li>
            <li className="h-9 py-2 px-2.5 flex items-center gap-x-2.5 rounded-lg">
              <BriefcaseIcon />
              <span>Projects</span>
            </li>
          </ul>

          <section className="flex-1">
            <h2>Collections</h2>
            <ul></ul>
          </section>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <Button variant="icon" size="icon-lg" title="Settings">
          <GearIcon />
        </Button>
        {process.env.NODE_ENV === "development" && (
          <Button variant="icon" size="icon-lg" asChild>
            <Link href={routes.admin.home} title="Go to admin">
              <CheckerboardShieldIcon className="fill-orange-solid" />
            </Link>
          </Button>
        )}
        <Button variant="icon" size="icon-lg" title="Permalink to this page">
          <HyperlinkIcon />
        </Button>
      </section>
    </nav>
  );
}
