import { categories } from "../mockdata/categories";

const Categories = () => {
    return ( 
        <div className="shadow-md">
            <h2 className="p-2 text-white bg-gray-700 font-semibold ">Categories</h2>
            <div className="overflow-x-hidden h-48 scrollbar-default px-5">
                <ul className="">
                    {
                        categories.map((category)=>{
                            return(
                                <li className="hover:ml-1 hover:font-semibold hover:text-[purple] capitalize cursor-pointer hover" name="" id="" key={category.id}>{category.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default Categories;