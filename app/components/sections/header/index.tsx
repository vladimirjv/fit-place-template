import Logo from "../../logo";
import { Nav } from "./nav";

export default function Header() {
  return (
    <header className="border-b flex flex-row px-4">
      <div className="flex h-16 items-center ">
        {/* <!-- logo - start --> */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <Logo className={"h-12"} />
          <span className="text-sky-700 hidden md:block">Fit Place</span>
        </a>
        {/* <!-- logo - end --> */}
      </div>
      <Nav className="flex-1" />
      <div className="ml-auto flex items-center space-x-4">
        {/* <HeaderSideNav isCoach={isCoach} /> */}
        {/* <ModeToggle /> */}
        {/* <span>User</span> */}
        {/* <UserButton /> */}
        {/* <UserButton 
          afterSignOutUrl="/" 
          userProfileMode="navigation"
        /> */}
      </div>
    </header>
  );
}
