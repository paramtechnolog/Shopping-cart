import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc , curr) => acc + curr.price , 0))
  }, [cart])
  return (
    <div className="">
      {
        cart.length > 0 ?
          (<div className=" flex w-full items-center justify-center gap-28">

            <div>
              {
                cart.map((item, index) => (
                  <CartItem item={item} key={item.id} itemIndex={index} />
                ))
              }
            </div>

            <div>

              <div className=" flex flex-col justify-between items-center mt-4">
                <div className=" text-medium uppercase font-semibold mb-2"> Your Cart </div>
                <div className=" uppercase text-green-800 text-3xl mb-2"> Summary</div>
                <p>
                  <span className=" font-semibold"> Total Item: {cart.length}</span>
                </p>
              </div>

              <div className=" ">
                <p>Total Amount ${totalAmount}</p>
                <button className=" w-full bg-green-600 text-white outline p-3"> Chack Out</button>
              </div>


            </div>
          </div>) :
          (<div className=" w-full h-screen flex justify-center items-center">
            <div> 
                       
            <h2 className=" font-bold  uppercase mb-4"> Cart Empty </h2>
            <Link to={"/"}>
              <button className=" w-full bg-green-600 text-white outline p-3 ">Shop Now</button>
            </Link>
            </div>
            
          </div>)
      }
    </div>
  )
};

export default Cart;
