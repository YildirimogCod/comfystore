import { useSelector } from "react-redux";
import CartTotals from "../components/CartTotals";
import CheckoutForm from "../components/CheckoutForm";
import SectionTitle from "../components/SectionTitle";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};
const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <section className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </section>
    </>
  );
};

export default Checkout;
