import { ReactNode } from "react";
import Header from "~/components/sections/header";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
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
