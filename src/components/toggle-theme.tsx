"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"}
    </Button>
  );
}
