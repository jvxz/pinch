// import { Input } from "@/components/ui/input";
// import { useSearchStore } from "@/lib/store/search-term";

// export default function DeviceTableSearch() {
// const {setSearchTerm} = useSearchStore()

//   return <Input onChange={(e) =>{
//     setSearchTerm(e.target.value)
//   }} placeholder="Search" />;
// }

"use client";

import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/lib/store/search-term";
import { CircleX } from "lucide-react";
import { useRef } from "react";

export default function DeviceTableSearch() {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    setSearchTerm("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="space-y-2">
      {/* <Label htmlFor="input-24">Input with clear button</Label> */}
      <div className="relative">
        <Input
          id="input-24"
          ref={inputRef}
          className="pe-9"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear input"
            onClick={handleClearInput}
          >
            <CircleX size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
