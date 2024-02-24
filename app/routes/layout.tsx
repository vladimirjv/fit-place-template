import { MainNav } from "~/components/main-nav";

export default function DashboardPage() {
  return (
    <div className="flex-col flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <header className="">
            <div className="flex h-16 items-center px-4">
              {/* <!-- logo - start --> */}
              <a
                href="/"
                className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                aria-label="logo"
              >
                {/* <Logo className={"h-12 text-brand-500"} /> */}
                {/* <span className="text-brand-300 hidden md:block">Fit Place</span> */}
              </a>
              {/* <!-- logo - end --> */}
              <MainNav className="mx-6" />
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
            </div>
          </header>
          {/* <TeamSwitcher />
          <MainNav className="mx-6" /> */}
          <div className="ml-auto flex items-center space-x-4">
            {/* <Search />
            <UserNav /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
