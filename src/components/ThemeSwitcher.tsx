
import React from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  React.useEffect(() => {
    // Sync state when mounting
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    // On mount: check theme in localStorage
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      } // else (system): leave as is
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Passer au mode clair" : "Passer au mode sombre"}
      type="button"
      className="ml-2 rounded-full inline-flex items-center justify-center p-2 transition hover:bg-accent focus:outline-none"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
}
