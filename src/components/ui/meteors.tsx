import { cn } from "../../lib/utils";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number).fill(true);
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {meteors.map((_, idx) => {
        const size = Math.floor(Math.random() * 2) + 1;
        return (
          <span
            key={idx}
            className={cn(
              "absolute top-0 left-0 w-0.5 h-0.5 rounded-full bg-white",
              "animate-meteor-effect"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 40}s`,
              animationDuration: `${Math.random() * 30 + 10}s`,
              width: `${size}px`,
              height: `${size * 80}px`,
            }}
          ></span>
        );
      })}
    </div>
  );
};