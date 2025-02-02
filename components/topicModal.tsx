"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function TopicModal() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    const dontShowAgain = localStorage.getItem("dontShowAgain");
    if (!dontShowAgain) {
      setIsDialogVisible(true);
    }
  }, []);
  const handleDontShowAgain = () => {
    localStorage.setItem("dontShowAgain", "true");
    setIsDialogVisible(false);
  };
  return (
    <Dialog
      open={isDialogVisible}
      onOpenChange={() => setIsDialogVisible(false)}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Helpful info</DialogTitle>
          <DialogDescription>
            Please note that on this interface you can navigate to the next
            topic by going to the quiz tab. It is advised to try all assessments
            before moving on to the next topic
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="secondary"
            onClick={handleDontShowAgain}
          >
            Dont show again
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
