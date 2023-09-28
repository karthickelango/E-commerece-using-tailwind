import React from 'react'
import { useSelector } from 'react-redux';
import { remove } from './store/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './empty-cart.gif'

const StorePage = () => {

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-150">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No stores to show!</h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to='/' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Go back to home
          </Link>
        </div>
      </div>
    </main>

  )
}

export default StorePage