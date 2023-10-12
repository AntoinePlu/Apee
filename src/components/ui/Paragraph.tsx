import { inter } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const baseClassName = cn("", inter.className);
const paragraphVariants = cva(baseClassName, {
  variants: {
    variant: {
      regular: "font-normal",
      strong: "font-semibold",
      link: "font-normal underline",
      strike: "font-normal [text-decoration-line:strikethrough]",
    },
    size: {
      large: "text-lg",
      default: "text-base",
      small: "text-sm",
    },
  },
  defaultVariants: {
    variant: "regular",
    size: "default",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const Paragraph = React.forwardRef<HTMLHeadingElement, ParagraphProps>(
  ({ className, size = "default", ...props }, ref) => {
    return <p ref={ref} className={paragraphVariants({ size })} {...props} />;
  },
);
Paragraph.displayName = "Paragraph";

export default Paragraph;
