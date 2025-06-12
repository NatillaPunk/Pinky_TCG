export default function NavMenu(){


    return(
        <>
            <nav className="menu-container flex flex-row flex-wrap justify-around w-full h-17 fixed z-50 text-center items-center bg-amber-50 ">
                <i className="text-center">Menu</i>
                <input className="flex  text-center resize-none items-center" placeholder="Search"   name="" id=""></input>

                
                <ul className=" flex flex-row justify-around gap-1 ">
                    <li className=""><a href="">Option 1</a></li>
                    <li><a className="text-center" href="">Option 2</a></li>
                    <li><a href="">Option 3</a></li>
                    <li><a href="">Option 4</a></li>
                </ul>
            </nav>
        </>
    )

}