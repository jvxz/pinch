import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { LIBRARIES, SOCIALS } from "@/lib/constants";
import { CircleHelp, Github, Globe } from "lucide-react";
import Link from "next/link";

export default function PanelHeader() {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-border p-4">
      <div className="flex h-fit items-end gap-2">
        <h2 className="text-2xl font-semibold">pinch</h2>
        <p className="-translate-y-[3px] text-sm text-muted-foreground">
          v2.0.0
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger>
            <Button size="icon">
              <CircleHelp />
            </Button>
          </DialogTrigger>
          <DialogContent closeBtn>
            <DialogHeader>
              <DialogTitle className="mb-4 flex flex-col items-start gap-2">
                <TypingAnimation className="text-4xl" text="pinch v2.0.0" />
                <Button variant="link" className="p-0" asChild>
                  <Link href="https://github.com/jvxz/pinch">
                    <Github className="h-4 w-4" />
                    @jvxz/pinch
                  </Link>
                </Button>
              </DialogTitle>
              <DialogDescription className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-foreground">What?</h2>
                <p>
                  Pinch is a simple wallpaper cropper. It is meant to crop
                  mobile wallpapers, but it can be used to crop desktop
                  wallpapers as well.
                </p>
                <h2 className="text-xl font-semibold text-foreground">Why?</h2>
                <p>
                  As an iPhone user, I&apos;ve found that the native wallpaper
                  cropper built-in doesn&apos;t suit my needs, especially in
                  latest versions. After realizing there weren&apos;t many
                  straightforward solutions for my problem (that I knew of), I
                  decided to make my own solution how I liked it.
                </p>
                <h2 className="text-xl font-semibold text-foreground">How?</h2>
                <p>
                  Pinch was built with Next.js and TailwindCSS, along with these
                  amazing libraries:
                </p>
                <ul className="flex list-disc flex-col">
                  {LIBRARIES.map((e) => {
                    return (
                      <Button key={e.name} variant="link" asChild>
                        <Link
                          className="flex w-fit items-center gap-2"
                          href={e.url}
                          target="_blank"
                        >
                          <Globe className="h-4 w-4" />
                          {e.name}
                        </Link>
                      </Button>
                    );
                  })}
                </ul>
                <h2 className="text-xl font-semibold text-foreground">Who?</h2>
                <p>Pinch was hand coded all by me:</p>
                <div className="flex flex-col justify-start">
                  {SOCIALS.map((e) => {
                    return (
                      <Button key={e.name} variant="link" asChild>
                        <Link
                          className="flex w-fit items-center gap-2"
                          href={e.url}
                          target="_blank"
                        >
                          <e.icon className="h-4 w-4" />
                          {e.name}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <ThemeToggle />
      </div>
    </header>
  );
}
