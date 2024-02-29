import { SessionsSelect } from "~/db/Sessions/handler";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

type SessionCardProps = {
  session: SessionsSelect;
};

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="flex-1 w-full flex flex-col gap-2 text-wrap rounded-lg p-5 border bg-card text-card-foreground shadow-sm">
      <span className="block tablet:hidden text-sm">{session.start_time} - {session.end_time}</span>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <span className="hidden tablet:block text-4xl">{session.start_time} - {session.end_time}</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">Coach name</span>
        </div>
        <Button variant="outline">Register</Button>
      </div>
      <span className="text-muted-foreground text-lg">15 places available</span>
    </div>
  );
}