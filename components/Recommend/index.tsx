import React from 'react'
import SectionHeader from '../common/SectionHeader'
import Card from './Card'

const Recommend = () => {
  return (
    <>
      <section>
        <div className='mx-auto container px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeader title='Recommended Newsletters' />
          <div className='mt-10 flex justify-between'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  )
}

export default Recommend
