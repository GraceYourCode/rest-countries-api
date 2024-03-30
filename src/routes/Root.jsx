import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ControlBar from '../components/ControlBar'
import CountriesCollection from '../components/CountriesCollection'
import allData from "../store/index."

const Root = () => {
  const [data, setData] = useState("");
  const [completeData, setCompleteData] = useState("");

  return (
    <allData.Provider value={{ data, setData, completeData, setCompleteData }}>
      <div className='dark:bg-dark-bg bg-light-bg font-primary min-h-screen'>
        <NavBar />
        <ControlBar />
        <CountriesCollection />
      </div>
    </allData.Provider>
  )
}

export default Root
