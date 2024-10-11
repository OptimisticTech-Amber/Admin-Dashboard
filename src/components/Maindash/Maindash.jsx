import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../table/Table'
import "./Maindash.css"
const Maindash = () => {
  return (
    <div className='MainDash'>
        <h1>DashBoard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default Maindash