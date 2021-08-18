import Meal from "./Meal"
import { data } from "../mockdata/meals";
const Meals = () => {
    return ( 
        <div className ="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-auto">
            {
                data && data.map((meal, index) => {
                    return<Meal key={index} meal={meal}/> 
                }
                )
            }
        </div> 
    );
}
 
export default Meals;