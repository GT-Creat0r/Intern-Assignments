import { useCart } from "../../context/cart-context";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <div className="navbar">
      <h2>Shopee</h2>
      <p>Cart Count : {cart.length}</p>
    </div>
  );
};
export default Navbar;
