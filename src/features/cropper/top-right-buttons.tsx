import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ArrowDownToLine, Image } from "lucide-react";

export default function TopRightButtons() {
  return (
    <div className="motion-preset-fade absolute right-0 top-0 m-4 flex flex-col gap-2">
      <Tooltip>
        <TooltipTrigger>
          <Button size="icon" variant="outline">
            <Image />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Preview</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button size="icon" variant="outline">
            <ArrowDownToLine />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Download</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
