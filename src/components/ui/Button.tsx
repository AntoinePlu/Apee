import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@apee/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
  ),
  {
    variants: {
      variant: {
        default: "bg-gray-solid",
        icon: "bg-transparent text-gray-text-low hover:bg-gray-component1 active:bg-gray-component2 active:text-gray-text-high",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9 rounded-lg",
        "icon-sm": "h-6 w-6 rounded-lg",
        "icon-md": "h-10 w-10 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button variant="icon" {...props} ref={ref} />,
);
IconButton.displayName = "IconButton";

export { Button, buttonVariants, IconButton };
