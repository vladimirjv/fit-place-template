import { NavLink } from "@remix-run/react";
import { mobileNavConfig } from "~/lib/config";
import { cn } from "~/lib/utils";

export default function BottomNav() {
  return (
    <footer className="flex tablet:hidden items-center px-8 h-16 border-t absolute bottom-0 w-full">
      <nav className="flex flex-1 justify-center items-center gap-4">
      {mobileNavConfig.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.href}
            // className="flex flex-col p-2 items-center justify-center select-none cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-border rounded-xl">
            className={({isActive}) => 
              cn([
                "flex flex-col p-2 items-center justify-center select-none cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-border rounded-xl",
                isActive && "text-primary bg-border"
              ])
            }>
            {item.icon}
            {item.title}
          </NavLink>
      ))}
      </nav>
    </footer>
  );
}
