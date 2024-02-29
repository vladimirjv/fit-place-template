import { WODWithAuthor } from "~/db/WOD/schema";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import dayjs from "dayjs";

type WODSingleCard = {
  wod: WODWithAuthor;
  date: Date;
};

export default function WODSingleCard({ wod, date }: WODSingleCard) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{dayjs(date).format('MMMM D')}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div
          className="routine-item"
          dangerouslySetInnerHTML={{ __html: wod.content as TrustedHTML }}
        ></div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>

  );
}