import { useRouter } from "next/router";
import { data } from "../../mockdata/meals";
import Image from 'next/image';
const Meal = ({meal}) => {


    return ( 
        <div className="p-10 grid grid-cols-1 md:grid-cols-6">
            <div className="flex-0.5 relative">
                <Image src={meal.image } layout={"fill"} />
            </div>
            <div>
                <div className="flex 2xl">
                    <span>{meal.name}</span>
                </div>
                <div className="flex">
                    <span>{meal.price}</span>
                </div>
                <div>
                    <span>R{meal.price}</span>
                    <div>
                        <span>{meal.category}</span>
                    </div>
                    <div>
                        <span>{meal.cookTime}Min</span>
                    </div>
                    <div>
                        {
                            meal.includes && 
                            meal.includes.map((item, index) => {
                                return <span key={index}>{item}</span>
                            }
                            )
                        }
                    </div>
                </div>
                <div></div>
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