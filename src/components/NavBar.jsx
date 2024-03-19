import ThemeSwitcher from "./ThemeSwitcher"

/**This navBar components renders the navigation bar which is going to
 * be present in all pages of the application
 */
const NavBar = () => {
  return (
    <div className="bg-white dark:bg-dark-elements text-white flex justify-between px-20 py-4">
      <p>Where in the world</p>
      {/**The button below is the  */}
      
      <ThemeSwitcher />
    </div>
  )
}

export default NavBar
