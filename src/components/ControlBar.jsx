const ControlBar = () => {
  return (
    <div className="px-20 py-8 flex justify-between">
      <input type="search" placeholder="Search for a country" className="bg-dark-elements w-96 py-3 px-5 outline-none text-white text-home" />
      <div className="bg-dark-elements w-72 py-3 px-5 ">
        {/**The select tag is kept in this div in order to style
         * the select tag in such a way that the padding at each
         * sides will be equal
         */}
        <select className="w-full outline-none bg-transparent text-white text-home">
          <option className="bg-dark-elements">True</option>
          <option className="bg-dark-elements">True</option>
          <option className="bg-dark-elements">True</option>
          <option className="bg-dark-elements">True</option>
          <option className="bg-dark-elements">True</option>
        </select>
      </div>
    </div>
  )
}

export default ControlBar
