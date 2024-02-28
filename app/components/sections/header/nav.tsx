import { NavLink as Link } from "@remix-run/react";
import { headerConfig } from "~/lib/config";
import { cn } from "~/lib/utils";

export function Nav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex-1 flex flex-row items-center justify-end space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {headerConfig.length > 1 &&
        headerConfig.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            // className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary/90 active:text-primary"
            className={({ isActive }) =>
              cn([
                "text-sm font-medium text-muted-foreground transition-colors hover:text-primary/90",
                isActive ? "text-primary" : ""
              ])
            }
          >
            {item.title}
          </Link>
        ))}
    </nav>
  );
}
