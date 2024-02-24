import { SignIn } from "@clerk/remix";
 
export default function SignInPage() {
  return (
    <main className="container h-screen flex flex-col items-center justify-center gap-5">
      <SignIn />
    </main>
  );
}