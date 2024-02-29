import { Links, Meta, Scripts, useNavigate, useRouteError } from "@remix-run/react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function ErrorBanner() {
  const error = useRouteError();
  const navigate =useNavigate();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no! 💥</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <section className="container flex h-screen flex-col items-center bg-card space-y-6">
          <h1 className="text-primary/75 tablet:text-7xl text-4xl font-semibold leading-none tracking-tighter mt-20">
            <span className="text-blue-500">Oops!</span> Internal errror, we are working on it.
          </h1>
          <h2 className="text-5xl">💪🏽</h2>
          <Button onClick={() => navigate(-1)} className="gap-4"> 
          <ArrowLeft className="h-5 w-5" />
           Go back</Button>
        </section>
        <Scripts />
      </body>
    </html>
  );
}