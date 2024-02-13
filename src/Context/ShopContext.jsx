import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = (e) => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // const addToCart=(itemId)=>{
  //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

  //     console.log(prev)
  // }
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totlaAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totlaAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totlaAmount;
  };
  const getTotalCartItems=()=>{
    let totalTtem=0
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalTtem+=cartItems[item]
        }
    }
    return totalTtem

}

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
