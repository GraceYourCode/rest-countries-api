import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ControlBar from '../components/ControlBar'
import CountriesCollection from '../components/CountriesCollection'
import allData from "../store/index."

const Root = () => {
  const [data, setData] = useState("");// here's the mutable data which will be showiing on the DOM
  const [completeData, setCompleteData] = useState("");//immutable data used to reset the elements showing on the DOM after the end of a search
  const [searchErr, setSearchErr] = useState(false);// displays if the country searched for can be found or not
  const [regionData, setRegionData] = useState([])

  return (
    <allData.Provider value={{
      data,
      setData,
      completeData,
      setCompleteData,
      searchErr,
      setSearchErr,
      regionData,
      setRegionData
    }}>
      <div className='dark:bg-dark-bg bg-light-bg font-primary min-h-screen'>
        <NavBar />
        <ControlBar />
        <CountriesCollection />
      </div>
    </allData.Provider>
  )
}

export default Root
