import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { IconProps } from "@apee/components/icons";
import { cn } from "@apee/lib/utils";

export const BUTTON_KIND = {
  PRIMARY: "primary",
  ACCENT: "accent",
  DESTRUCTIVE: "destructive",
} as const;

export const BUTTON_EMPHASIS = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export const BUTTON_SIZE = {
  SMALL: "small",
  REGULAR: "regular",
  LARGE: "large",
} as const;

const DEFAULT_CLASSNAMES = cn(
  "group inline-flex items-center space-x-2 text-base/none font-semibold transition-colors",
  "disabled:pointer-events-none",
);

const KIND_AND_EMPHASIS_VARIANTS = {
  kind: {
    primary: "",
    accent: "",
    destructive: "",
  },
  emphasis: {
    low: "",
    medium: "",
    high: "",
  },
};

const buttonVariants = cva(DEFAULT_CLASSNAMES, {
  variants: {
    size: {
      small: "h-9 pl-3 pr-4",
      regular: "h-9 rounded-lg pl-3 pr-4",
      large: "h-9 pl-3 pr-4",
    },
    kind: {
      primary: "",
      accent: "",
      destructive: "",
    },
    emphasis: {
      low: "border",
      medium: "border",
      high: "",
    },
  },
  compoundVariants: [
    {
      kind: "primary",
      emphasis: "low",
      className:
        "border-white-6 bg-white-1 hover:border-white-8 hover:bg-white-2 active:bg-white-3 disabled:border-white-4",
    },
    {
      kind: "primary",
      emphasis: "medium",
      className:
        "border-white-5 bg-white-3 hover:border-white-7 hover:bg-white-4 active:border-white-8 active:bg-white-5 disabled:border-white-4 disabled:bg-white-2",
    },
    {
      kind: "primary",
      emphasis: "high",
      className:
        "bg-white-9 hover:bg-white-10 active:bg-white-11 disabled:bg-white-7",
    },
    {
      kind: "accent",
      emphasis: "low",
      className:
        "border-orange-a6 bg-orange-a1 hover:border-orange-a8 hover:bg-orange-a2 active:bg-orange-a3 disabled:border-orange-a4 disabled:bg-orange-a1",
    },
    {
      kind: "accent",
      emphasis: "medium",
      className:
        "border-orange-a5 bg-orange-a3 hover:border-orange-a7 hover:bg-orange-a4 active:border-orange-a8 active:bg-orange-a5 disabled:border-orange-a4 disabled:bg-orange-a2",
    },
    {
      kind: "accent",
      emphasis: "high",
      className:
        "bg-orange-a9 hover:bg-orange-a10 active:bg-orange-a11 disabled:bg-orange-a7",
    },
    {
      kind: "destructive",
      emphasis: "low",
      className:
        "border-violet-a6 bg-violet-a1 hover:border-violet-a8 hover:bg-violet-a2 active:bg-violet-a3 disabled:border-violet-a4 disabled:bg-violet-a1",
    },
    {
      kind: "destructive",
      emphasis: "medium",
      className:
        "border-violet-a5 bg-violet-a3 hover:border-violet-a7 hover:bg-violet-a4 active:border-violet-a8 active:bg-violet-a5 disabled:border-violet-a4 disabled:bg-violet-a2",
    },
    {
      kind: "destructive",
      emphasis: "high",
      className:
        "bg-violet-a9  hover:bg-violet-a10 active:bg-violet-a11 disabled:bg-violet-a7",
    },
  ],
  defaultVariants: {
    size: "regular",
    kind: "primary",
    emphasis: "medium",
  },
});

const iconVariants = cva("", {
  variants: KIND_AND_EMPHASIS_VARIANTS,
  compoundVariants: [
    {
      kind: "primary",
      emphasis: "low",
      className: "text-white-10 group-disabled:text-white-8",
    },
    {
      kind: "primary",
      emphasis: "medium",
      className: "text-white-10 group-disabled:text-white-8",
    },
    {
      kind: "primary",
      emphasis: "high",
      className:
        "text-white-11 group-active:text-white-12 group-disabled:text-white-8",
    },
    {
      kind: "accent",
      emphasis: "low",
      className:
        "text-orange-a9 group-hover:text-orange-a10 group-active:text-orange-a10 group-disabled:text-orange-a7",
    },
    {
      kind: "accent",
      emphasis: "medium",
      className:
        "text-orange-a9 group-hover:text-orange-a10 group-active:text-orange-a10 group-disabled:text-orange-a7",
    },
    {
      kind: "accent",
      emphasis: "high",
      className:
        "text-white-11 group-active:text-white-12 group-disabled:text-white-8",
    },
    {
      kind: "destructive",
      emphasis: "low",
      className: "text-violet-a10 group-disabled:text-violet-a7",
    },
    {
      kind: "destructive",
      emphasis: "medium",
      className: "text-violet-a10 group-disabled:text-violet-a7",
    },
    {
      kind: "destructive",
      emphasis: "high",
      className:
        "text-white-11 group-active:text-white-12 group-disabled:text-white-8",
    },
  ],
});

const labelVariants = cva("", {
  variants: KIND_AND_EMPHASIS_VARIANTS,
  compoundVariants: [
    {
      kind: "primary",
      emphasis: "low",
      className:
        "text-white-10 group-hover:text-white-11 group-active:text-white-12 group-disabled:text-white-8",
    },
    {
      kind: "primary",
      emphasis: "medium",
      className: "text-white-12 group-disabled:text-white-8",
    },
    {
      kind: "primary",
      emphasis: "high",
      className: "text-white-12 group-disabled:text-white-9",
    },
    {
      kind: "accent",
      emphasis: "low",
      className:
        "text-orange-a9 group-hover:text-orange-a11 group-active:text-orange-a12 group-disabled:text-orange-a8",
    },
    {
      kind: "accent",
      emphasis: "medium",
      className: "text-white-12 group-disabled:text-orange-a8",
    },
    {
      kind: "accent",
      emphasis: "high",
      className: "text-white-12 group-disabled:text-white-9",
    },
    {
      kind: "destructive",
      emphasis: "low",
      className:
        "text-violet-a10 group-hover:text-violet-a11 group-active:text-violet-a12 group-disabled:text-violet-a8",
    },
    {
      kind: "destructive",
      emphasis: "medium",
      className: "text-white-12 group-disabled:text-violet-a8",
    },
    {
      kind: "destructive",
      emphasis: "high",
      className: "text-white-12 group-disabled:text-white-8",
    },
  ],
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<IconProps>;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      icon,
      size,
      kind,
      emphasis,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const Icon = icon; // Rename it to make it usable in JSX

    return (
      <Comp
        className={cn(buttonVariants({ size, kind, emphasis }), className)}
        ref={ref}
        {...props}
      >
        <>
          {Icon ? (
            <Icon className={cn(iconVariants({ kind, emphasis }))} />
          ) : null}
          <span
            className={cn(labelVariants({ kind, emphasis }), { "ml-1": !Icon })}
          >
            {children}
          </span>
        </>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
