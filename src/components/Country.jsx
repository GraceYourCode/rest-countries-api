import { Link } from "react-router-dom"

const Country = () => {
  return (
    <Link to="/details" className="flex flex-col">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="flag" className="rounded-t h-40" />
      <div className="bg-dark-elements rounded-b text-white p-5">
        <h5>Germany</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, harum?</p>
      </div>
    </Link>
  )
}

export default Country
