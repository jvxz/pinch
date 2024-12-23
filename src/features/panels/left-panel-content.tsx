"use client";

import Cropper, { type Area } from "react-easy-crop";
import ExpandPanelButton from "./right-panel-expand-button";
import getCroppedImg from "../cropper/get-cropped-image";
import { saveAs } from "file-saver";
import { useImageData } from "@/lib/store/image-data";
import { useDeviceStore } from "@/lib/store/device-type";

export default function LeftPanelContent() {
  const {
    setCropDimensions,
    cropDimensions,
    setCroppedImage,
    croppedImage,
    setZoom,
    zoom,
  } = useImageData();
  const { device } = useDeviceStore();

  const handleCropComplete = async (
    croppedArea: Area,
    croppedAreaPixels: Area,
  ) => {
    const x = await getCroppedImg("", croppedAreaPixels);
    if (!x) return;
    setCroppedImage(x);
  };

  function handleAspectRatio() {
    if (!device.width || !device.height) return;
    return Number(device.width) / Number(device.height);
  }

  return (
    <>
      {/* <section className="grid size-full place-items-center">
        <Button
          size="icon"
          variant="outline"
          className="motion-preset-focus motion-duration-400 motion-delay-100 flex size-64 flex-col gap-2 rounded-xl"
        >
          <Image className="size-16" />
          <h1 className="text-2xl font-semibold">Import image</h1>
          <p className="text-wrap px-6 text-sm text-muted-foreground">
            You can also drag and drop an image on the window
          </p>
        </Button>
      </section> */}

      <div className="h-screen">
        <Cropper
          image=""
          crop={cropDimensions}
          zoom={zoom}
          aspect={handleAspectRatio()}
          onCropChange={setCropDimensions}
          onZoomChange={setZoom}
          showGrid
          onCropComplete={handleCropComplete}
          classes={{
            containerClassName:
              "relative mx-12 h-full flex items-center justify-center",
            cropAreaClassName:
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/50 shadow-[0_0_0_9999em_rgba(0,0,0,0.60)] ",
            mediaClassName: "bg-background",
          }}
          disableAutomaticStylesInjection
        />
      </div>
      <ExpandPanelButton />
      <div
        onClick={() => saveAs(croppedImage, "cropped.png")}
        className="absolute bottom-0 left-0 right-0 top-0 z-50 size-4 bg-black/50"
      ></div>
    </>
  );
}
