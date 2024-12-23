import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleDataTransfer(e: DragEvent | File) {
  if (e instanceof DragEvent) {
    if (!e.dataTransfer?.files[0]) return;

    if (!e.dataTransfer?.files[0].type.startsWith("image/")) {
      return undefined;
    }

    const url = URL.createObjectURL(e.dataTransfer?.files[0]);
    return url;
  } else if (e instanceof File) {
    if (!e.type.startsWith("image/")) {
      return undefined;
    }

    const url = URL.createObjectURL(e);
    return url;
  }

  return undefined;
}
