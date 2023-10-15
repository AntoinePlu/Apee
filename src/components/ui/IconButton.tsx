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
  LARGE: "large",
  REGULAR: "regular",
  SMALL: "small",
} as const;

const iconButtonVariants = cva(DEFAULT_CLASSNAMES, {
  variants: {
    size: {
      small: "h-6 w-6 rounded-sm",
      regular: "h-9 w-9 rounded",
      large: "h-12 w-12 rounded-md",
    },
    kind: {
      primary: "",
      accent: "",
      destructive: "",
    },
    emphasis: {
      ghost: "",
      low: "border",
      medium: "border",
      high: "",
    },
  },
  compoundVariants: [
    // Primary Variants
    {
      kind: "primary",
      emphasis: "ghost",
      className:
        "text-white-9 hover:bg-white-4 hover:text-white-10 active:bg-white-5",
    },
    {
      kind: "primary",
      emphasis: "low",
      className:
        "border-white-6 text-white-9 hover:border-white-8 hover:bg-white-2 hover:text-white-10 active:border-white-9 active:bg-white-3",
    },
    {
      kind: "primary",
      emphasis: "medium",
      className:
        "border-white-5 bg-white-3 text-white-9 hover:border-white-7 hover:bg-white-4 hover:text-white-10 active:border-white-8 active:bg-white-5",
    },
    {
      kind: "primary",
      emphasis: "high",
      className:
        "bg-white-9 text-white-11 hover:bg-white-10 active:bg-white-11",
    },
    // Accent Variants
    {
      kind: "accent",
      emphasis: "ghost",
      className:
        "bg-orange-a1 text-orange-a9 hover:bg-orange-a4 hover:text-orange-a10 active:bg-orange-a5",
    },
    {
      kind: "accent",
      emphasis: "low",
      className:
        "border-orange-a6 bg-orange-a1 text-orange-a9 hover:border-orange-a8 hover:bg-orange-a2 hover:text-orange-a10 active:border-orange-a9 active:bg-orange-a3",
    },
    {
      kind: "accent",
      emphasis: "medium",
      className:
        "border-orange-a5 bg-orange-a3 text-orange-a9 hover:border-orange-a7 hover:bg-orange-a4 hover:text-orange-a10 active:border-orange-a8 active:bg-orange-a5",
    },
    {
      kind: "accent",
      emphasis: "high",
      className:
        "bg-orange-a9 text-white-11 hover:bg-orange-a10 active:bg-white-11",
    },
    // Accent Variants
    {
      kind: "destructive",
      emphasis: "ghost",
      className:
        "bg-violet-a1 text-violet-a9 hover:bg-violet-a4 hover:text-violet-a10 active:bg-violet-a5",
    },
    {
      kind: "destructive",
      emphasis: "low",
      className:
        "border-violet-a6 bg-violet-a1 text-violet-a9 hover:border-violet-a8 hover:bg-violet-a2 hover:text-violet-a10 active:border-violet-a9 active:bg-violet-a3",
    },
    {
      kind: "destructive",
      emphasis: "medium",
      className:
        "border-violet-a5 bg-violet-a3 text-violet-a9 hover:border-violet-a7 hover:bg-violet-a4 hover:text-violet-a10 active:border-violet-a8 active:bg-violet-a5",
    },
    {
      kind: "destructive",
      emphasis: "high",
      className:
        "bg-violet-a9 text-white-11 hover:bg-violet-a10 active:bg-white-11",
    },
  ],
  defaultVariants: {
    size: "regular",
    kind: "primary",
    emphasis: "medium",
  },
});

const iconVariants = cva("", {
  variants: {
    size: {
      small: "h-4 w-4",
      regular: "h-5 w-5",
      large: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "regular",
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentType<IconProps>;
  iconClassName?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, size, kind, emphasis, icon: Icon, iconClassName, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(iconButtonVariants({ size, kind, emphasis }), className)}
        ref={ref}
        {...props}
      >
        <Icon className={cn("icon", iconVariants({ size }), iconClassName)} />
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
  kind,
  emphasis,
  icon: Icon,
  iconClassName,
  ...props
}: IconButtonLinkProps) {
  return (
    <Link className={iconButtonVariants({ size, kind, emphasis })} {...props}>
      <Icon className={iconClassName} />
    </Link>
  );
}
IconButtonLink.displayName = "IconButtonLink";

export { IconButton, IconButtonLink };
