import React from 'react'

const HeroForm = () => {
  return (
    <form className='flex items-center gap-4 mt-10 w-auto justify-center'>
      <div className='relative'>
        <input
          type='email'
          id='UserEmail'
          placeholder='Enter your email address'
          className='md:w-96 w-full rounded-md border border-slate-400 py-2 px-5 pr-10 sm:text-lg'
        />
        <span className='pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500'>
          <svg viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </div>
      <a
        role='button'
        type='submit'
        href='#'
        className='inline-flex items-center rounded bg-accent px-8 py-3 text-white hover:bg-accent/80 focus:outline-none focus:ring'>
        <span className='text-md font-medium'> Subscribe </span>
      </a>
    </form>
  )
}

export default HeroForm
