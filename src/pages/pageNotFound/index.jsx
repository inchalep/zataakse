import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center flex-col gap-3'>
        <h2 className='text-2xl font-bold'>Ops! Page Not found.</h2>
        <button onClick={()=>navigate('/')} className='py-1 p-3 rounded-md bg-green-500'>Go Back</button>
      </div>
    </div>
  )
}

export default PageNotFound