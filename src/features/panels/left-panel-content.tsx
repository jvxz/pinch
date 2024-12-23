"use client";
import { useRef } from "react";
import ExpandPanelButton from "./right-panel-expand-button";
import { Button } from "@/components/ui/button";
import { useImageData } from "@/lib/store/image-data";
import { Image } from "lucide-react";
import ImageCropper from "../cropper/cropper";

export default function LeftPanelContent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { image, setImage } = useImageData();

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));

    // const blob = new Blob([file], { type: file.type });
    // const url = URL.createObjectURL(blob);
    // console.log(`blob:${url}`);
  }
  return (
    <>
      <section className="grid size-full place-items-center">
        {image ? (
          <ImageCropper />
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
              onChange={handleImageChange}
            />
          </>
        )}
      </section>

      <ExpandPanelButton />
    </>
  );
}
