import React from "react";
import { cn } from "../../lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          animate && "animate-gradient"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-80 group-hover:opacity-100 transition duration-500",
          animate && "animate-gradient"
        )}
      />
      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
};