import { cn } from "@apee/lib/utils";
import { ClassValue } from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: ClassValue;
}

const DEFAULT_CLASSNAME = "flex flex-1";

export function Flex({ children, className }: Props) {
  return <div className={cn(DEFAULT_CLASSNAME, className)}>{children}</div>;
}
