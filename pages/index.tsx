import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title='Next.js Starter' description='Bootstrap your next.js projects!' />
      <main className='grid h-screen place-items-center'>
        <section className='text-center'>
          <h1>Next.js Starter Kit</h1>
          <h2>Bootstrap your next projects!</h2>
          <p>Typescript, TailwindCSS, sass and more...</p>
        </section>
      </main>
    </>
  )
}

export default HomePage
