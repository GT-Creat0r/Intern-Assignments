import { useCart } from "../../context/cart-context";

export const Products = ({ product }) => {
  const {cart, cartDispatch } = useCart();

  const isInCart=cart.some((item)=>item._id===product._id)
  const onAddToCartClick = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const onRemoveFromCartClick = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <div className="product-card">
      
        <p className="product-name">{product.name}</p>
      
      <div className="product-details">
        <p>Price : {product.newPrice}</p>
        <p>Rating : {product.rating}</p>
        <p>Discount : {product.discount}</p>
      </div>
      <div>
        <button onClick={onAddToCartClick} disabled={isInCart}>{isInCart? "Added":"Add to Cart"}</button>
        <button onClick={onRemoveFromCartClick} disabled={!isInCart}>Remove from Cart</button>
      </div>
    </div>
  );
};
