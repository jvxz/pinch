"use client";
import { useRef } from "react";
import ExpandPanelButton from "./right-panel-expand-button";
import { Button } from "@/components/ui/button";
import { useImageData } from "@/lib/store/image-data";
import { Image } from "lucide-react";
import ImageCropper from "../cropper/cropper";
import { handleDataTransfer } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import TopLeftButtons from "../cropper/top-left-buttons";
import TopRightButtons from "../cropper/top-right-buttons";

export default function LeftPanelContent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { image, setImage } = useImageData();
  const { toast } = useToast();
  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
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
    <>
      <section className="grid size-full place-items-center">
        {image ? (
          <div className="relative w-full">
            <ImageCropper />
            <TopLeftButtons />
            <TopRightButtons />
          </div>
        ) : (
          <>
            <Button
              size="icon"
              variant="outline"
              className="motion-duration-400 motion-preset-focus flex size-64 flex-col gap-2 rounded-xl motion-delay-100"
              onClick={() => inputRef.current?.click()}
            >
              <Image className="size-16" />
              <h1 className="text-2xl font-semibold">Import image</h1>
              <p className="text-wrap px-6 text-sm text-muted-foreground">
                You can also drag and drop an image on the window
              </p>
            </Button>
            <input
              multiple={false}
              ref={inputRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </>
        )}
      </section>

      <ExpandPanelButton />
    </>
  );
}
