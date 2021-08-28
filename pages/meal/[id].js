import { useRouter } from "next/router";
import { data } from "../../mockdata/meals";

const Meal = ({meal}) => {


    return ( 
        <div className="p-10 grid grid-cols-1 md:grid-cols-6">
            <div>
                {meal.id}
                {meal.name}
            </div>
            <div>
                content
            </div>
        </div>
     );
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    
    
    // Get the paths we want to pre-render based on posts
    const paths = data.map((meal) => {
        return {
            params: { id: meal.id.toString() },
        };
    });

    console.log(paths);
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    
    const meal = data.filter(meal => meal.id === parseInt(params.id))[0];

    
  
    // Pass post data to the page via props
    return { props: { meal } }
}

export default Meal;