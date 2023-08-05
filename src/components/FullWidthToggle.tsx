"use client";

import { LeftPaneIcon } from "@apee/components/icons";
import { Button } from "@apee/components/ui";

export function FullWidthToggle() {
  const toggleFullWidth = () => {
    document.body.classList.toggle("full-width");
  };

  return (
    <Button variant="icon" size="icon" onClick={toggleFullWidth}>
      <LeftPaneIcon />
    </Button>
  );
}