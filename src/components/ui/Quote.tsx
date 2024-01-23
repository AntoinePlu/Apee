import { inter } from "@apee/lib/fonts";
import { cn } from "@apee/lib/utils";

const baseClassName = cn(
  "border-l border-white-8 pl-6 italic text-white-8",
  inter.className,
);

interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {}

export const Quote = ({ className, children }: QuoteProps) => (
  <blockquote className={cn(baseClassName, className)}>{children}</blockquote>
);

export default Quote;
