const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* <button>Add to Cart</button> */}
    </div>
  );
};

export default ProductCard;
