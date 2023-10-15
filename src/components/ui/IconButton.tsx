import { IconProps } from "@apee/components/icons";
import { cn } from "@apee/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const DEFAULT_CLASSNAMES = cn(
  "inline-flex items-center justify-center rounded-md bg-transparent text-sm font-medium text-gray-text-low transition-colors",
  "hover:bg-gray-component1 active:bg-gray-component2 active:text-gray-text-high",
  "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none",
  "",
);

export const ICON_BUTTON_KIND = {
  PRIMARY: "primary",
  ACCENT: "accent",
  DESTRUCTIVE: "destructive",
} as const;

export const ICON_BUTTON_EMPHASIS = {
  GHOS: "ghost",
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export const ICON_BUTTON_SIZE = {
  SMALL: "small",
  REGULAR: "regular",
  LARGE: "large",
} as const;

const iconButtonVariants = cva(DEFAULT_CLASSNAMES, {
  variants: {
    size: {
      small: "h-6 w-6 rounded-sm",
      medium: "h-9 w-9 rounded",
      large: "h-12 w-12 rounded-md",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentType<IconProps>;
  iconClassName?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, icon: Icon, iconClassName, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        <Icon className={iconClassName} />
      </button>
    );
  },
);
IconButton.displayName = "IconButton";

type NextLinkProps = typeof Link extends React.ForwardRefExoticComponent<
  infer T
>
  ? T
  : never;

export interface IconButtonLinkProps
  extends NextLinkProps,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentType<IconProps>;
  iconClassName?: string;
}
function IconButtonLink({
  size,
  icon: Icon,
  iconClassName,
  ...props
}: IconButtonLinkProps) {
  return (
    <Link className={iconButtonVariants({ size })} {...props}>
      <Icon className={iconClassName} />
    </Link>
  );
}
IconButtonLink.displayName = "IconButtonLink";

export { IconButton, IconButtonLink };
