import { inter } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const baseClassName = cn("", inter.className);
const paragraphVariants = cva(baseClassName, {
  variants: {
    variant: {
      regular: "font-medium",
      strong: "font-semibold",
      link: "font-medium underline",
      strike: "font-normal [text-decoration-line:strikethrough]",
      mono: "font-normal [text-decoration-line:strikethrough] [font-variant-numeric:lining-nums_tabular_nums]",
    },
    size: {
      large: "text-lg/6",
      default: "text-base",
      small: "text-sm",
    },
  },
  defaultVariants: {
    variant: "regular",
    size: "default",
  },
});

interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof paragraphVariants> {}

export const Label = React.forwardRef<HTMLHeadingElement, LabelProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <span ref={ref} className={paragraphVariants({ size })} {...props} />
    );
  },
);
Label.displayName = "Label";

export default Label;
