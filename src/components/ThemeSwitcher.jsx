import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeSwitcher = () => {
  let [darkMode, setDarkMode] = useState(false);

  const userTheme = window.matchMedia("(prefers-color-scheme: light)");

  useEffect(() => {
    /**this checks the localstorage of the user to get the preferred color theme
     * and hence inputs the return value into the variable darkMode
     */
    if (userTheme.matches) setDarkMode(false);
    else setDarkMode(true);
  }, [])

  useEffect(() => {
    /**this effect is called anytime there is a change in the value of darkMode
     * It checks if darkMode is true and then it adds a class of dark to the
     * document element while it is false, it removes the class dark, hence
     * the use of the toggle() method
     */
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode])

  const toggleMode = () => {
    /**this function toggles the value of darkMode and sets the new value
     * into the localStorage of the user
     */
    setDarkMode(darkMode = !darkMode);
    userTheme.matches = !darkMode;
  }

  return (
    <button onClick={() => toggleMode()} className="outline-none bg-transparent border-0 cursor-pointer text-xs sm:text-sm text-light-text dark:text-white">
      {darkMode ?
        /**if darkMode is true it displays this */
        <span className="flex gap-1 sm:gap-3 items-center"><IoMoonSharp /><>Light Mode</></span> :
        /**if darkMode is false it displays this */
        <span className="flex gap-1 sm:gap-3 items-center"><IoMoonOutline /><>Dark Mode</></span>}
    </button>
  )
}

export default ThemeSwitcher
