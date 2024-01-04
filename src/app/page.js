"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const {resolvedTheme, setTheme} = useTheme()
  return (
    <>
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        Click me to change theme
      </button>
    </>
  );
}
