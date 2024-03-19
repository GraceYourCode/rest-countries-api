import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    console.log(localStorage.getItem("darkMode"))
    setDarkMode(isDarkMode);
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode])

  const toggleMode = () => {
    setDarkMode(darkMode = !darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }

  return (
      <button onClick={() => toggleMode()} className="outline-none text-light-text dark:text-white">
        {darkMode ? <>Light Mode</> : "Dark Mode"}
      </button>
  )
}

export default ThemeSwitcher
