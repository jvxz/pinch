import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useImageData } from "@/lib/store/image-data";
import saveAs from "file-saver";
import { ArrowDownToLine, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function TopRightButtons() {
  const { croppedImage } = useImageData();

  return (
    <div className="motion-preset-fade absolute right-0 top-0 m-4 flex flex-col gap-2">
      <Dialog>
        <DialogTrigger>
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="outline">
                <ImageIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Preview</p>
            </TooltipContent>
          </Tooltip>
        </DialogTrigger>
        <DialogContent className="w-fit">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
          <Image
            src={croppedImage!}
            alt="cropped image"
            width={300}
            height={300}
          />
          <DialogFooter className="flex w-full gap-2 *:flex-1">
            <Button
              onClick={() => {
                saveAs(croppedImage!, `pinch-${new Date().getTime()}.png`);
              }}
              variant="default"
            >
              Download
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Tooltip>
        <TooltipTrigger>
          <Button
            onClick={() => {
              saveAs(croppedImage!, `pinch-${new Date().getTime()}.png`);
            }}
            size="icon"
            variant="outline"
          >
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
