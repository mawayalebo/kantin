import { useRouter } from "next/router";
import { data } from "../../mockdata/meals";
import { ShoppingBagIcon } from '@heroicons/react/solid';
import Image from 'next/image';
const Meal = ({meal}) => {


    return ( 
        <div className="p-10 grid grid-cols-1 md:grid-cols-6">
            <div className="flex-0.5  w-full h-[50vh] relative overflow-hidden">
                <Image className="rounded-[20px]" src={meal.image} layout={"fill"} />
            </div>
            <div>
                <div className="flex text-4xl font-bold">
                    <span>{meal.name}</span>
                </div>
                
                <div className="flex items-center">
                    <div className="text-[70px] font-bold text-[orangered] ">
                        <span>R{meal.price}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
                        <div className="flex items-center justify-center bg-[purple] rounded-full text-white px-2">
                            <span>{meal.category}</span>
                        </div>
                        <div>
                            <span className="font-bold">{meal.cookTime} Min</span> 
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="space-x-3 flex">
                {
                    meal.includes && 
                    meal.includes.map((item, index) => {
                    return <span key={index} className="bg-gray-100 text-purple-800 rounded-full px-2 ">{item}</span>
                        }
                    )
                }
            </div>
            <div className="bg-[green] p-5 text-white flex justify-between mt-2 active:scale-90 ease-out transition">
                <span>Add to cart</span>
                <ShoppingBagIcon className="text-white h-5 w-5" />
            </div>
        </div>
     );
}

export async function getStaticPaths() {
   
    const paths = data.map((meal) => {
        return {
            params: { id: meal.id.toString() },
        };
    });

  
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {


    
    const meal = data.filter(meal => meal.id === parseInt(params.id))[0];
  
    return { props: { meal } }
}

export default Meal;