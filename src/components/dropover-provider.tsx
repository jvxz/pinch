"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ImageUp } from "lucide-react";

const variants: Variants = {
  initial: { opacity: 0, transition: { duration: 0.1 } },
  animate: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.1 } },
};

export default function DropoverProvider() {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    // drag enter event
    function handleEnter(e: DragEvent) {
      e.preventDefault();
      setDragging(true);
    }

    // drag over event
    function handleOver(e: DragEvent) {
      e.preventDefault();
    }

    // drag drop event
    function handleDrop(e: DragEvent) {
      e.preventDefault();
      console.log(e);
      setDragging(false);
    }

    document.addEventListener("dragenter", handleEnter);
    document.addEventListener("dragover", handleOver);
    document.addEventListener("drop", handleDrop);

    return () => {
      document.removeEventListener("dragenter", handleEnter);
      document.removeEventListener("dragover", handleOver);
      document.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <AnimatePresence>
      {dragging && (
        <motion.div
          className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black/50"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Card className="flex flex-col gap-4 p-8">
            <ImageUp className="mx-auto size-12" />
            <h3 className="text-center text-2xl font-bold">Import image</h3>
            <p>Import image by dropping</p>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
