import ThemeSwitcher from "./ThemeSwitcher"

/**This navBar components renders the navigation bar which is going to
 * be present in all pages of the application
 */
const NavBar = () => {
  return (
    <div className="bg-white dark:bg-dark-elements text-light-text dark:text-white flex justify-between px-20 py-3
    shadow-md dark:shadow-none">
      <p className="text-xl font-bold">Where in the world?</p>
      {/**The button below is the  */}
      
      <ThemeSwitcher />
    </div>
  )
}

export default NavBar
