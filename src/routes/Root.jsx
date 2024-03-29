import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import ControlBar from '../components/ControlBar'
import CountriesCollection from '../components/CountriesCollection'

const Root = () => {
  return (
    <div className='dark:bg-dark-bg bg-light-bg font-primary'>
      <NavBar />
      <ControlBar />
      <CountriesCollection />
    </div>
  )
}

export default Root
