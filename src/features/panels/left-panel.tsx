import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export default function LeftPanel() {
  return (
    <section className="grid size-full place-items-center">
      <Button
        size="icon"
        variant="outline"
        className="flex size-64 flex-col gap-2 rounded-xl"
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image className="size-16" />
        <h1 className="text-2xl font-semibold">Import image</h1>
        <p className="text-wrap px-6 text-sm text-muted-foreground">
          You can also drag and drop an image on the window
        </p>
      </Button>
    </section>
  );
}
