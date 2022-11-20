import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title='Next.js Starter' description='Bootstrap your next.js projects!' />
      <main className='grid h-screen place-items-center'>
        <div className='text-center'>
          <h1>Next Starter</h1>
          <h2>Bootstrap your next.js projects!</h2>
        </div>
      </main>
    </>
  )
}

export default HomePage
