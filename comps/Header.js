
import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../features/app/slices/basketSlice';

const Header = () => {
    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    };

    const goToCart = () => {
        router.push('/cart');
    };

    const basketItems = useSelector(selectBasketItems);

    return ( 
        <div className="flex py-5 items-center bg-[white] fixed top-0 w-screen z-30 shadow-sm">
            {/*left side*/}
            <div className="flex flex-[0.2] items-center justify-start space-x-3 p-3 pr-6 rounded-r-full bg-[purple]">
                <MenuIcon className="text-white w-5 h-5"/>
                <span onClick={goToHome} className="text-white text-3xl mr-15">Kantin</span>  
            </div>

            {/*right side*/}
            <div className="flex flex-[0.8] items-center justify-end p-3">
                <div onClick={goToCart} className="relative flex justify-center rounded-full p-3 bg-[purple]">
                    <ShoppingBagIcon className="text-white w-5 h-5"/>
                    <div className="absolute flex justify-center right-1 top-0">
                        {
                            basketItems && <span className="text-white px-1 text-">{basketItems.length}</span>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;