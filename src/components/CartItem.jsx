import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import Cart from "../pages/Cart";



const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error("item Removed")
  }
  return (
    <div className=" mt-10">

      <div className=" flex justify-between items-center   gap-10">
        <div>
          <img className="h-[150px] w-[150px]" src={item.image} />
        </div>

        <div className="">
          <h1 className=" w-80 font-bold mb-3">{item.title}</h1>
          <h1 className="mb-4 ">{item.description.split(" ").slice(0,15)}</h1>

          <div className=" flex justify-between">
            <p className=" text-green-700  "> ${item.price}</p>

            
            <div
            className=" relative"
            onClick={removeFromCart}
             >
              <MdDelete className=" absolute top-3 ml-3" />
              <div className=" w-10 h-10 rounded-full bg-red-300"></div>

            </div>

          </div>
           <div className=" h-1 w-full bg-slate-950 mt-5"></div>
        </div>

      </div>

    </div>
  )
};

export default CartItem;
