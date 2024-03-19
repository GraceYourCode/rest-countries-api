const ControlBar = () => {
  return (
    <div className="px-20 py-8 flex justify-between">
      <input type="search" placeholder="Search for a country" className="dark:bg-dark-elements bg-white w-96 
      py-3 px-5 outline-none text-light-text dark:text-white text-home" />
      <div className="bg-white dark:bg-dark-elements w-72 py-3 px-5 ">
        {/**The select tag is kept in this div in order to style
         * the select tag in such a way that the padding at each
         * sides will be equal
         */}
        <select className="w-full outline-none bg-transparent text-light-text dark:text-white text-home">
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
        </select>
      </div>
    </div>
  )
}

export default ControlBar
