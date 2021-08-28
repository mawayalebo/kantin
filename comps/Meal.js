import Image from "next/image"
import { useRouter } from 'next/router';


const Meal = ({meal}) => {
    const router = useRouter();

    const clickMeal = () => {
        router.push(`/meal/${meal.id}`);
    }
    return ( 
        <div onClick = { clickMeal } className="p-3">
            <div className="flex">
                <div className="relative flex">
                    <Image src={meal.image} width="150" height="150" className="rounded"/>
                </div>
                <div className="relative flex flex-col flex-grow p-2">
                    <div className="flex justify-start mb-1">
                        <span className="font-bold text-xl">{meal.name}</span>
                    </div>
                    <div className="flex items-center relative space-x-5">
                        <div>
                            <span className="font-bold text-3xl text-[orangered]">R{meal.price}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-[purple]">{meal.cookTime} Min</span>
                            <span className="px-2 bg-[purple] text-white rounded-full">{meal.category}</span>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Meal;