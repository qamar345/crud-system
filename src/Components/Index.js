import React from 'react'
import { Link } from 'react-router-dom'

export const Index = () => {
  return (
    <div className='container mt-5 text-center'>
       <Link to={"/add"}> <button className='btn btn-primary'> Add Data </button> </Link>
       
       <Link to={"/login"}> <button className='btn btn-success'> Login </button> </Link>
    </div>
  )
}
