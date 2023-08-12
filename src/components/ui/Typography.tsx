import { trumpGothic } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

/**
 * Heading
 */
const headingBase = cn("uppercase", trumpGothic.className);
const headingVariants = cva(headingBase, {
  variants: {
    level: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-base",
      6: "text-sm",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, ...props }, ref) => {
    const Tag: `h${1 | 2 | 3 | 4 | 5 | 6}` = `h${level || 1}`;

    return <Tag ref={ref} className={headingVariants({ level })} {...props} />;
  },
);
Heading.displayName = "Heading";

/**
 * Paragraph
 */
const paragraphBase = cn();
const paragraphVariants = cva(paragraphBase, {
  variants: {},
  defaultVariants: {},
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={paragraphVariants({})} {...props} />;
  },
);
Paragraph.displayName = "Paragraph";
