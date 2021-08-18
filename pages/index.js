import Head from 'next/head'
import Meal from '../comps/Meal'
import Meals from '../comps/Meals'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kantin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Meals/>
      </main>
    </div>
  )
}
