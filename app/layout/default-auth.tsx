import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/remix";
import { ReactNode } from "react";
import BottomNav from "~/components/sections/bottomNav";
import Header from "~/components/sections/header";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SignedIn>
        <Header></Header>
        <main className="container overflow-auto" style={{maxHeight: "calc(100vh - 4.125rem)"}}>{children}</main>
        <BottomNav />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
  // <div className="flex flex-col min-h-screen">
  //   <header className="bg-primary text-white">
  //     <div className="container mx-auto py-4 px-4">
  //       <h1 className="text-2xl font-bold">Remix Starter</h1>
  //     </div>
  //   </header>
  //   <main className="container mx-auto py-8 px-4 flex-1">
  //     {children}
  //   </main>
  //   <footer className="bg-primary text-white">
  //     <div className="container mx-auto py-4 px-4">
  //       <p>&copy; 2021 Remix Starter</p>
  //     </div>
  //   </footer>
  // </div>
}
