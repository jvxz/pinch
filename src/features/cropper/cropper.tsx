"use client";

import Cropper, { type Area } from "react-easy-crop";
import { useImageData } from "@/lib/store/image-data";
import { useDeviceStore } from "@/lib/store/device-type";
import getCroppedImg from "./get-cropped-image";
export default function ImageCropper() {
  const {
    setCropDimensions,
    cropDimensions,
    setCroppedImage,
    croppedImage,
    setZoom,
    zoom,
  } = useImageData();
  const { device } = useDeviceStore();
  const { image } = useImageData();

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
    <div className="h-screen">
      <Cropper
        image={image}
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
  );
}
