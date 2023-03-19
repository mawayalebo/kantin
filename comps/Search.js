import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
    return ( 
        <div className="w-full">
            <div className="flex mt-5 items-center gap-2">
                <input type="search" name="meal" id="search_meal" placeholder="Search for your favourite meal..🍔" 
                    className="flex-1 border-orange-700 border-2 p-3"
                />
                <SearchIcon className="w-8 h-8 text-[purple] bg-gray-300 p-6"/>
            </div>
        </div>
     );
}
 
export default Search;