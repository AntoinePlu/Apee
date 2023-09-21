"use client";

import { SidebarIcon } from "@apee/components/icons";
import { IconButton } from "@apee/components/ui";

export default function FullWidthToggle() {
  const toggleFullWidth = () => {
    document.body.classList.toggle("full-width");
  };

  return (
    <IconButton size="medium" onClick={toggleFullWidth} icon={SidebarIcon} />
  );
}
