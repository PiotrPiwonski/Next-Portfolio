import React from "react";
import { useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function DarkMode () {

    useEffect(() => {
        const isDArkMode = localStorage.getItem("isDarkMode");
        if (isDArkMode === "true") {
          window.document.documentElement.classList.add("dark");
        }
      }, []);
    
      const toggleDarkMode = () => {
        window.document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "isDarkMode",
          window.document.documentElement.classList.contains("dark")
        );
      };

    return (
        <React.Fragment>
            <div className="fixed top-4 right-4 z-[100]">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night shadow-lg"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
        </React.Fragment>
    )
}