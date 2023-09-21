import { cn } from "@apee/lib/styling";
import React from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

const DEFAULT_CLASSNAME = "h-9 py-4 px-3 rounded-md bg-white-4";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(DEFAULT_CLASSNAME, className)}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
