import type { NextPage } from 'next'
import Seo from '../components/scaffolding/Seo'

const IndexPage: NextPage = () => (
  <>
    <Seo />
    <main className='grid h-screen place-items-center'>
      <section className='text-center'>
        <h1>Next.js Starter Kit</h1>
        <h2>Bootstrap your next projects!</h2>
        <p>Typescript, TailwindCSS, sass and more...</p>
      </section>
    </main>
  </>
)

export default IndexPage
