import { ClassValue, cn } from "@apee/lib/styling";

interface Props {
  children?: React.ReactNode;
  className?: ClassValue;
}

const DEFAULT_CLASSNAMES = "flex items-center";

export function Flex({ children, className }: Props) {
  return <div className={cn(DEFAULT_CLASSNAMES, className)}>{children}</div>;
}
