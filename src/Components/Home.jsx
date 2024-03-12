import React from 'react'
import { Link } from 'react-router-dom'
import wallet from './Images/wallet.png'

export const Home = () => {
  return (
    <div className='h-auto md:h-screen md:overflow-hidden'>
      <div className="md:flex justify-evenly pt-[140px] px-6">
        <div>
          <h1 className="text-[60px]">
            <i>Let some <br /> elegance into <br /> your finance</i>
          </h1>
          <p className="text-lg py-4">
            Simplify your financial journey with us. Join today and experience
            hassle-free banking.
          </p>
        </div>
        <div>
            <img className="w-[500px] lg:w-[380px]" src={wallet}/>
        </div>     
      </div>
      <Link to={"/register"} className="mb-[130px] ml-6 lg:ml-[180px] px-4 hover:text-green-300 py-2 rounded bg-green-800 font-semibold text-2xl">
      <i>Open an account</i>
      </Link>
    </div>
  )
}
