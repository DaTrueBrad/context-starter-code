import React from 'react'

function ProductCard({product, isCart, index}) {
  return (
    <div className="product-card">
      <div className="upper-card">
        <h4>{product.name}</h4>
        <button onClick={() => console.log(index)}>{isCart ? "Remove" : "Add to Cart"}</button>
      </div>
      <p>{product.desc}</p>
    </div>
)
}

export default ProductCard