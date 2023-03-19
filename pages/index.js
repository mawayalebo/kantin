import Head from 'next/head'
import Banner from '../comps/Banner'
import Categories from '../comps/Categories'
import Meal from '../comps/Meal'
import Meals from '../comps/Meals'
import Search from '../comps/Search'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kantin</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="">
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Banner/>
          <div className='w-full grid grid-cols-1'>
            <Search/>
            <div className='w-full grid grid-cols-2 gap-2'>
              <div>some here</div>
              <Categories/>
            </div>
          </div>
          
        </div>
        <Meals />
      </main>
    </div>
  )
}
/*
export async function getStaticProps(){
  const meals = await fetch('https://www.themealdb.com/api/json/v1/1/latest.php')
  const data = await meals.json()
  return {
    props: {
      meals: data.meals
    }
  }
}
*/
