import Meal from "./Meal"
import { data } from "../mockdata/meals";
const Meals = ({meals}) => {
    return ( 
        <div className ="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-10 sm:mx-5 place-content-center">
            {
                data && data.map((meal) => {
                    return<Meal key={meal.id} meal={meal}/> 
                }
                )
            }
        </div> 
    );
}
 
export default Meals;