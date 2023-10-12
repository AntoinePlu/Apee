"use client";

import { SidebarIcon } from "@apee/components/icons";
import { Button, IconButton } from "@apee/components/ui";

export default function NavigationToggle() {
  const toggleNavigation = () => {
    document.body.classList.toggle("nav-open");
  };

  return (
    <>
      <Button
        onClick={toggleNavigation}
        icon={SidebarIcon}
        className="inline-flex md:hidden"
      >
        Menu
      </Button>
      <IconButton
        size="medium"
        onClick={toggleNavigation}
        icon={SidebarIcon}
        className="hidden md:inline-flex"
      />
    </>
  );
}
