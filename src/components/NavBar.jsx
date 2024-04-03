import ThemeSwitcher from "./ThemeSwitcher"

/**This navBar components renders the navigation bar which is going to
 * be present in all pages of the application
 */
const NavBar = ({ position }) => {
  return (
    <div className={`bg-white dark:bg-dark-elements text-light-text dark:text-white flex justify-between
    px-4 sm:px-8 md:px-16 lg:px-20 py-2 sm:py-3 shadow-md dark:shadow-none ${position} w-full`}>
      <p className="text-sm sm:text-xl font-bold">Where in the world?</p>
      <ThemeSwitcher />
    </div>
  )
}

export default NavBar
