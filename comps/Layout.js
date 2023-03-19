import Header from "./Header"

const Layout = ({children}) => {
    
    return ( 
        <div>
            <Header/>
            <div className="mt-32">
                {children}
            </div>
        </div>
     );
}

export default Layout;