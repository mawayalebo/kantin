import { selectUser } from "../../features/app/slices/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import { RadioButtonUncheckedRounded } from "@material-ui/icons";
const User = () => {

    const user = useSelector(selectUser);
    const router = useRouter();

    

    const logOut = () => {
        auth.signOut();
        router.push("/");
    }

    

    return ( 
        <div className="p-5 flex flex-col">
            <h1 className="font-bold text-[orangered] text-4xl mb-3">Details</h1>
            <div className="border-b-2 border-black border-solid mb-4"></div>
            <div className="flex justify-end flex-grow">
                <div onClick={logOut} className="flex bg-red-100 rounded-full justify-center p-2 hover:shadow-md hover:scale-110 active:bg-red-600">
                    <span className="text-red-600 font-bold ">Sign out</span>
                </div>
            </div>
        </div>
     );
}
 
export default User;