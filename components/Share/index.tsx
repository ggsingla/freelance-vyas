import React from 'react'
// import HeroForm from '../Hero/HeroFrom'
import { SocialIcon } from 'react-social-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Share = () => {
  const notify = () => {
    navigator.clipboard.writeText('www.careervyas.com')
    toast.success('Copied to Clipboard')
  }
  return (
    <>
      <section className='relative overflow-hidden container mx-auto py-4 px-4 md:px-10 md:shadow-xl rounded-2xl mt-10 md:my-10 flex flex-col lg:flex-row justify-between items-center'>
        <img
          src='/elements/clouds.svg'
          alt='Clouds BG'
          className='absolute -bottom-5 w-[200%] -z-10 left-0'
        />
        <div className='lg:py-24'>
          <h2 className=' text-4xl font-semibold max-w-lg'>
            Make your Friends aware about CV Broadcast
          </h2>

          <div className='flex gap-4 mt-10 flex-col sm:flex-row'>
            <span className='relative'>
              <div className='w-auto md:w-96 rounded-md border border-slate-400 py-2 px-5 pr-10 sm:text-lg bg-white '>
                www.careervyas.com
              </div>
              <span
                onClick={notify}
                className='cursor-pointer hover:text-accent absolute top-1/2 -translate-y-1/2 right-2 flex gap-2  w-fit place-content-center text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
                  />
                </svg>
                {/* <p>Copy to Clipboard</p> */}
              </span>
              <ToastContainer
                position='bottom-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                limit={2}
                theme='light'
              />
            </span>
            <div className='space-x-4 mx-auto'>
              <SocialIcon url='https://web.whatsapp.com/' />
              <SocialIcon url='https://instagram.com/' />
              <SocialIcon url='https://facebook.com/' />
            </div>
          </div>
        </div>
        <img src='/vectors/share-vector.png' alt='Share it Vector' />
      </section>
    </>
  )
}

export default Share
