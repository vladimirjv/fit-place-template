import { UserButton } from "@clerk/remix";
import { Nav } from "./nav";
import Logo from "../logo";
import { ModeToggle } from "~/components/organisms/mode-toggle";

export default function Header() {
  return (
    <header className="hidden tablet:flex flex-row px-4 border-b">
      <div className="flex h-16 items-center ">
        {/* <!-- logo - start --> */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <Logo className={"h-12"} />
          {/* <span className="text-sky-700 hidden md:block">Fit Place</span> */}
        </a>
        {/* <!-- logo - end --> */}
      </div>
      <Nav className="flex-1" />
      <div className="ml-4 flex items-center space-x-4">
        {/* <HeaderSideNav isCoach={isCoach} /> */}
        <ModeToggle />
        {/* <span>User</span> */}
        <UserButton />
        {/* <UserButton 
          afterSignOutUrl="/" 
          userProfileMode="navigation"
        /> */}
      </div>
    </header>
  );
}
