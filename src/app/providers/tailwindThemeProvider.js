"use client";

import { ThemeProvider } from "next-themes";

export default function TailwindThemeProvider({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
