import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { useImageData } from "@/lib/store/image-data";
import { handleDataTransfer } from "@/lib/utils";
import { Import, RotateCcw } from "lucide-react";
import { useRef } from "react";
export default function TopLeftButtons() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setImage } = useImageData();
  const { toast } = useToast();

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    const url = handleDataTransfer(file);
    if (!url) {
      toast({
        title: "Invalid image",
        description: "Please select a valid image file",
        variant: "destructive",
      });
      return;
    }
    setImage(url);
  }
  return (
    <div className="motion-preset-fade absolute left-0 top-0 m-4 flex flex-col gap-2">
      <Tooltip>
        <TooltipTrigger>
          <Button
            onClick={() => inputRef.current?.click()}
            size="icon"
            variant="outline"
          >
            <Import />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Import</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button onClick={() => setImage("")} size="icon" variant="outline">
            <RotateCcw />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Reset</p>
        </TooltipContent>
      </Tooltip>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}
