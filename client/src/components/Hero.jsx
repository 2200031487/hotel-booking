import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white 
      bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

      <p className='bg-[#49B9FF]/50 px-4 py-1 rounded-full mt-24 text-sm'>
        The Ultimate Hotel Experience
      </p>

      <h1 className='font-playfair text-3xl md:text-5xl font-extrabold max-w-xl mt-4 leading-tight'>
        Discover Your Perfect Gateway Destination
      </h1>

      <p className='max-w-xl mt-3 text-sm md:text-base'>
        Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
      </p>

      <form className='bg-white text-gray-600 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row items-end gap-4 w-full max-w-5xl'>

        {/* Destination */}
        <div className='flex-1'>
          <div className='flex items-center gap-2 text-sm font-medium'>
            <img src={assets.calenderIcon} alt="calendar icon" className='h-4' />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list='destinations'
            id="destinationInput"
            type="text"
            placeholder="Type here"
            required
            className='w-full rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none'
          />
          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        {/* Check-in */}
        <div>
          <div className='flex items-center gap-2 text-sm font-medium'>
            <img src={assets.calenderIcon} alt="calendar icon" className='h-4' />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className='rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none w-full'
          />
        </div>

        {/* Check-out */}
        <div>
          <div className='flex items-center gap-2 text-sm font-medium'>
            <img src={assets.calenderIcon} alt="calendar icon" className='h-4' />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className='rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none w-full'
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className='text-sm font-medium'>Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            placeholder="0"
            className='rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none w-full max-w-[100px]'

          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className='flex items-center justify-center gap-2 bg-black text-white rounded-md px-5 py-3 text-sm font-medium w-full md:w-auto'

        >
          <img src={assets.searchIcon} alt="search icon" className='h-5' />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Hero
