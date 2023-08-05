import routes from "@apee/app/routes";
import {
  CheckerboardShieldIcon,
  GearIcon,
  HyperlinkIcon,
  LeftPaneIcon,
} from "@apee/components/icons";
import { Button } from "@apee/components/ui";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-64 flex flex-col justify-between p-4">
      <section className="flex flex-col gap-y-4">
        <div>
          <Button variant="icon" size="icon">
            <LeftPaneIcon />
          </Button>
        </div>

        <form>
          <input type="search" placeholder="Search" name="search" />
        </form>
      </section>

      <ul>
        <li></li>
      </ul>

      <section className="flex-1">
        <h2>Collections</h2>
        <ul></ul>
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
