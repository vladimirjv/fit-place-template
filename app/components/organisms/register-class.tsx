import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ClassesSelect, splitClasses } from "~/db/Classes/handler";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";


type RegisterClassProps = {
  classes: ClassesSelect[]
  onRegister: MouseEventHandler;
  triggerLabel: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
};

export default function RegisterClass(props: RegisterClassProps) {
  const onCloseEvent = () => {
    // console.log(e);
    props.setIsOpen(false);
  }
  const { afternoonClasses, morningClasses } = splitClasses(props.classes);

  return (
    <Dialog open={props.isOpen} onOpenChange={onCloseEvent}>
      <DialogTrigger asChild>
        <Button asChild variant={"outline"}>
          <span
            tabIndex={0}
            onClick={props.onRegister}
            onKeyUp={() => null}
            role="button"
          >{props.triggerLabel}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onClick={e => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            {"Make changes to your profile here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <RadioGroup defaultValue="comfortable">
          <div className="grid gap-4 py-4 grid-cols-2">
            <div className="space-y-2">
              <Label>Morning Classes</Label>
              {morningClasses.map(c => (
                <div key={c.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(c.id)} id={String(c.id)} />
                  <Label>{`${c.start_time} - ${c.end_time}`}</Label>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label>Afternoon Classes</Label>
              {afternoonClasses.map(c => (
                <div key={c.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(c.id)} id={String(c.id)} />
                  <Label>{`${c.start_time} - ${c.end_time}`}</Label>
                </div>
              ))}
            </div>
          </div>
        </RadioGroup>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}