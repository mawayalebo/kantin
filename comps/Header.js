
import { MenuIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../features/app/slices/basketSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/app/slices/userSlice';
import {useEffect } from 'react';

const Header = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const goToHome = () => {
        router.push('/');
    };

    const goToCart = () => {
        router.push('/cart');
    };

    const goToUser = () => {
        router.push('/user');
    };
    
    const [user, loading, error] = useAuthState(auth);

    
    const basketItems = useSelector(selectBasketItems);

    const signIn = ()=>{
        auth.signInWithPopup(provider).catch(error => {
            alert(error.message);
        });


    }

    useEffect(() => {
        if (user) {
            dispatch(setCurrentUser(user));
        }
    } , [user]);


    console.log(user);
    return ( 
        <div className="flex py-5 items-center bg-[white] fixed top-0 w-screen z-30 shadow-sm">
            {/*left side*/}
            <div className="flex flex-[0.2] items-center justify-start space-x-3 p-3 pr-6 rounded-r-full bg-[purple]">
                <MenuIcon className="text-white w-5 h-5"/>
                <span onClick={goToHome} className="text-white text-3xl mr-15">Kantin</span>  
            </div>

            {/*right side*/}
            <div className="flex flex-[0.8] items-center justify-end p-3 space-x-3">
                <div onClick={goToCart} className="relative flex justify-center rounded-full p-3 bg-[purple]">
                    <ShoppingBagIcon className="text-white w-5 h-5"/>
                    <div className="absolute flex justify-center right-1 top-0">
                        {
                            basketItems && <span className="text-white px-1 text-">{basketItems.length}</span>
                        }
                        
                    </div>
                </div>
                    {
                        !user &&
                        <div onClick={signIn} className="rounded-full items-center bg-[purple] p-3 flex justify-center space-x-1">
                            <UserIcon className="text-white w-5 h-5"/>
                            <span className="hidden md:inline-flex text-white ">Account</span>
                        </div>
                    }
                    {
                        user &&
                        <div onClick={goToUser} className="relative w-11 h-11 rounded-full items-center bg-[purple] p-3 flex justify-center space-x-1 overflow-hidden">
                            {   user.photoURL &&
                                <Image src={user.photoURL} className="" layout="fill" />
                            }
                            {
                                !user.photoURL &&
                                <span className="text-white text-4xl font-bold">{user.email.slice(0,1)}</span>
                            }
                        </div>
                    }
                <div className="flex items-center p-3">
                    
                </div>
            </div>
        </div>
     );
}


 
export default Header;