"use client";

export default function MobileNavigationOverlay() {
  const toggleNavigation = () => {
    document.body.classList.toggle("nav-open");
  };

  return (
    <div
      className="navigation-overlay absolute inset-0 hidden bg-apee-black/80 nav-open:block"
      onClick={toggleNavigation}
    />
  );
}
