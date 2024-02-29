import { WODWithAuthor } from "~/db/WOD/schema";
import WODSingleCard from "../organisms/wod-card";

type WorkoutFullStoryProps = {
  date: Date;
  workout: WODWithAuthor | null;
};

const DefaultWorkout: WODWithAuthor = {
  id: 0,
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
  content: "<h1>No Workouts registered for today</h1>",
  created_by: null,
  // @ts-expect-error no complete author object
  author: {
    username: "No Author",
    firstName: "No",
    lastName: "Author",
    imageUrl: "https://github.com/shadcn.png",
  },
};

export default function WorkoutFullStory({ workout, date }: WorkoutFullStoryProps) {
  if (!workout) {
    workout = DefaultWorkout;
  }

  return (
    <>
      <WODSingleCard wod={workout} date={date} />
    </>
  );
}