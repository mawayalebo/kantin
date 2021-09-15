import { selectBasketItems } from "../features/app/slices/basketSlice";
import { useSelector } from "react-redux";
import Image from 'next/image';

const Cart = () => {
    const basketItems = useSelector(selectBasketItems);
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
                    <div className="flex flex-col">
                        {
                            basketItems.map(item =>(
                                <div className="flex">
                                    <div>cart item</div>
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