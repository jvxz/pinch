import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export default function TopRightButtons() {
  return (
    <div className="motion-preset-fade absolute right-0 top-0 m-4 flex flex-col gap-2">
      <Button size="icon" variant="outline">
        <Image />
      </Button>
      <Button size="icon" variant="outline">
        <Image />
      </Button>
    </div>
  );
}
