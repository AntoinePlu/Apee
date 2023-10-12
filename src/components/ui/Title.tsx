import { trumpGothic } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const baseClassName = cn(
  "font-bold uppercase tracking-wide",
  trumpGothic.className,
);
const titleVariants = cva(baseClassName, {
  variants: {
    size: {
      default: "text-5xl",
      medium: "text-4xl",
      small: "text-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const TAGS = {
  default: "h2",
  medium: "h3",
  small: "h4",
} as const;

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, size = "default", ...props }, ref) => {
    const Tag = TAGS[size ?? "default"];

    return <Tag ref={ref} className={titleVariants({ size })} {...props} />;
  },
);
Title.displayName = "Title";

export default Title;
