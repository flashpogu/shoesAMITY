import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.toggle("dark", localTheme === "dark");
    } else {
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-md border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-900 dark:border-gray-700 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
