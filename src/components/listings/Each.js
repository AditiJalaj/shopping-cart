import { useRef, useContext, useEffect } from "react";

const Each = ({
  brand,
  title,
  cartval,
  setCartVal,
  id,
  image,
  price,
  refresh,setRefresh
}) => {
  const btnRef = useRef(null);

  const addtoCart = (_id) => {
   // console.log("id", _id);
    btnRef.current.style.backgroundColor = "yellow";

    var cartCheck = false;

    //this part of gettign data is not correctly working from conntext api

    var alreadythere = JSON.parse(localStorage.getItem("cart"));
    if (alreadythere === null || alreadythere === undefined) {
      alreadythere = [];
    }
    const items = {
      id: _id,
      brand: brand,
      image: image,
      price: price,
      title:title
    };

    {
      alreadythere.forEach((i) => {
        if (i.id === _id) {
          alert("Item already present in cart!");
          cartCheck = true;
        }
      });
    }

    var merged;
    if (cartCheck === false) {
      merged = [...alreadythere, items];
      setCartVal(localStorage.setItem("cart", JSON.stringify(merged)));
    }
    setRefresh(!refresh)
  };

  return (
    <div className="each-item">
      <img className="product-image" src={image} alt="product-image" />
      <div>
        <p className="brand">{brand}</p>
        <span className="title">{title}</span>
        <span className="price">{price}$</span>
      </div>

      <button ref={btnRef} onClick={() => addtoCart(id)} className="addtocart">
        Add to Cart
      </button>
    </div>
  );
};

export default Each;
