import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem cartItem={item} key={item.cartID} />;
      })}
    </div>
  );
};

export default CartItemList;
