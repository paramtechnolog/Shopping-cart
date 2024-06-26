import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"
import { add, remove } from "../redux/Slices/CartSlice"


const Product = ({ post }) => {
  const { cart } = useSelector((state) => state)
  const dispetch = useDispatch();


  const addToCart = () => {
    dispetch(add(post));
    toast.success("item is added in cart")
  }

  const removeFromCart = () => {
    dispetch(remove(post.id));
    toast.error("item has been Removed")
  }
  return (
    <div className=" flex flex-col items-center justify-between hover:scale-110 transition duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
      <div >
        <p className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"> {post.title}</p>
      </div>

      <div>
        <p className=" w-40 text-gray-400 font-normal text-[10px] text-left"> {post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className=" h-[180px]">
        <img className=" w-full h-full" src={post.image} />
      </div>

      <div className=" flex justify-around gap-12 items-center w-full mt-5">

        <div>
          <p className=" text-green-600 font-semibold "> ${post.price}</p>
        </div>

        {
          cart.some((p) => p.id == post.id) ?
            (<button
              className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200"
              onClick={removeFromCart}   
            >
              Remove Item
            </button>) :

            (<button
              className=" text-gray-700 border-2 border-gray-700 rounded-full 
              font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200"
              onClick={addToCart}
            >
              Add to Cart
            </button>)
        }

      </div>

    </div>
  );
};

export default Product;
