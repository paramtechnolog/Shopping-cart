import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div className="">
      <nav className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
        
        <NavLink to="/">
          <div className=" ml-5">
             <img width={150} 
             className=" " 
             src="data:image/png;base64,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" />
          </div>
        </NavLink>

        <div className=" flex items-center font-md text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
               <p> Home</p>
          </NavLink>


          <NavLink to="/cart">

            <div className=" relative">
                   <FaShoppingCart className=" text-2xl" />
                   {
                    cart.length > 0 &&
                    <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                   }

            </div>

          </NavLink>

        </div>
      </nav>

    </div>
  );
};

export default Navbar;
