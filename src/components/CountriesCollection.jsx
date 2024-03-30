import Country from "./Country"

const CountriesCollection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     xl:grid-cols-4 gap-8 sm:gap-10 md:gap-16 px-8 md:px-16 lg:px-20">
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </div>
  )
}

export default CountriesCollection
