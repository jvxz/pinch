import DropoverProvider from "./dropover-provider";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DropoverProvider />
      {children}
    </ThemeProvider>
  );
}
