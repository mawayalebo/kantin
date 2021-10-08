import { selectBasketItems } from "../features/app/slices/basketSlice";
import { useSelector } from "react-redux";
import Image from 'next/image';
import { XIcon } from '@heroicons/react/solid';
import { useDispatch } from "react-redux";
import { removefromBasket } from "../features/app/slices/basketSlice";
const Cart = () => {
    const basketItems = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removefromBasket(id));
    };
    return ( 
        <div>
            {
                basketItems.length === 0 && 
                <div className="flex w-screen h-screen justify-center items-center">
                    <div>
                        <h1 className="text-4xl font-bold">Your cart is empty</h1>
                    </div>
                    
                </div>
            }
            {
                
                basketItems.length > 0 && 
                <div className="p-2">
                    <h1 className="text-3xl text-[orangered] font-bold">Cart Meals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {console.log(basketItems)}
                        {
                            basketItems.map(item =>(
                                <div className="rounded-2xl flex items-center mt-4 w-full p-5 hover:shadow-2xl">
                                    
                                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-xl" />
                                    <div className="p-2 flex flex-col flex-grow">
                                        <span className="font-bold">{item.name}</span>
                                        <span className="text-[orangered] font-bold">R{item.price}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div onClick={() => removeItem(item.id)}className="bg-[purple] flex rounded-full justify-center p-2 hover:scale-110 shadow-xl transition transform ease-in active:bg-red-600">
                                            <XIcon className="text-white h-3 w-3" />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
                

            }

        </div>    
    );
}
 
export default Cart;