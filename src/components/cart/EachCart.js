import { useState } from "react";

const EachCart = ({
  brand,
  title,
  cartval,
  setCartVal,
  id,
  image,
  refresh,
  setRefresh,
  price,
}) => {
  const [quan, setQuan] = useState(1);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const updatepricelogic = (__id) => {
    const found = cartval.find((i) => i.id === __id);
    found.price = updatedPrice;

    const restitems = cartval.filter((i) => i.id !== __id);
    console.log("rest", restitems);
    const merged = [...restitems, found];

    //logic for setval to update price in ls
    return localStorage.setItem("cart", JSON.stringify(merged));
  };

  const inc = (_id) => {
    setQuan((pv) => pv + 1);
    setUpdatedPrice((pv) => Math.floor(pv + price));
    updatepricelogic(_id);

    //want to use state refresh to update in price summary
  };

  const dec = (_id) => {
    if (quan > 1) {
      setQuan((pv) => pv - 1);
      setUpdatedPrice((pv) => Math.floor(pv - price));
      updatepricelogic(_id);
    }
  };

  const remove = (_id) => {
    const confirmation = window.confirm(
      "are you sure you want to remove item from cart?"
    );
    if (confirmation) {
      const removed =
        cartval &&
        cartval.length > 0 &&
        cartval.filter((i) => {
          return i.id !== _id;
        });

      setCartVal(localStorage.setItem("cart", JSON.stringify(removed)));
      setRefresh(!refresh);
    }
  };


  const saveHandler = (_id) => {
    var saved = JSON.parse(localStorage.getItem("saved"));

    console.log("saved", saved);
    if (saved === null || saved === undefined) {
      saved = [];
    }

    const items = {
      id: _id,
      brand: brand,
      image: image,
      price: price,
      title: title,
    };
    const savedarr = saved;
    if(savedarr.find((i)=>i.id===_id)){
        alert('item already saved')
        return 
    }
    
    savedarr.push(items)
    
    localStorage.setItem("saved", JSON.stringify(savedarr));

    if(cartval!==undefined){
        const tosaved=cartval.filter((i)=>{
           return  i.id!==_id
        })

        setCartVal(localStorage.setItem("cart", JSON.stringify(tosaved)));
        setRefresh(!refresh);
    }
  };


  return (
    <>
      <div key={id} className="eachcart-item">
        <p className="title">{title}</p>
        <img src={image} className="eachcart-image" alt="cart-image" />

        <span className="brand">{brand}</span>

        <span
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            margin: "8px",
            padding: "2px",
          }}
        >
          {updatedPrice}$
        </span>

        <button onClick={() => remove(id)} className="remove">
          REMOVE
        </button>
        <button
          className="remove"
          onClick={() => {
            saveHandler(id);
          }}
        >
          {" "}
          SAVE FOR LATER{" "}
        </button>
        <div>
          <button
            className="inc"
            onClick={() => {
              dec(id);
            }}
          >
            -
          </button>
          <span>{quan}</span>
          <button
            className="inc"
            onClick={() => {
              inc(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default EachCart;
