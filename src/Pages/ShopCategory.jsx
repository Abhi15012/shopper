import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner"  src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>SHowing 1-12 out of {all_product.length}  Products</span>
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          // if (props.category === item.category) {
            if (
              props.category === item.category ||
              (props.category === "mens" && item.category === "men") ||
              (props.category === "womens" && item.category === "women") ||
              (props.category === "kids" && item.category === "kid")
            ){
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } 
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
