// import { getNodeText } from "@testing-library/react";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from "../store/cartSlice";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.cart);
//   const handleRemove = (productId) => {
//     dispatch(remove(productId));
//     console.log(productId);
//   };

//   return (
//     <div>
//       <h3>Cart</h3>
//       <div className="cartWrapper">
//         {products.map((product) => (
//           <div key={product.id} className="cartCard">
//             <img src={product.image} alt="" />
//             <h5>{product.title}</h5>
//             <h5>{product.price}</h5>
//             <button className="btn" onClick={() => handleRemove(product.id)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, updateQuantity } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>Price: ${product.price}</h5>
            <div>
              <label>Quantity: </label>
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={(e) =>
                  handleQuantityChange(product.id, Number(e.target.value))
                }
              />
            </div>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { add, remove, updateQuantity } from "../store/cartSlice";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const { items } = useSelector((state) => state.cart);

//   const totalPrice = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const handleRemove = (productId) => {
//     dispatch(remove(productId));
//   };

//   const handleQuantityChange = (productId, newQuantity) => {
//     dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
//   };

//   return (
//     <div>
//       <h3>Cart</h3>
//       <div className="cartWrapper">
//         {items.map((product) => (
//           <div key={product.id} className="cartCard">
//             <img src={product.image} alt={product.title} />
//             <h5>{product.title}</h5>
//             <h5>Price: ${product.price}</h5>
//             <div>
//               <label>Quantity: </label>
//               <input
//                 type="number"
//                 value={product.quantity}
//                 min="1"
//                 onChange={(e) =>
//                   handleQuantityChange(product.id, Number(e.target.value))
//                 }
//               />
//             </div>
//             <button className="btn" onClick={() => handleRemove(product.id)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//       <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
//     </div>
//   );
// };

// export default Cart;
