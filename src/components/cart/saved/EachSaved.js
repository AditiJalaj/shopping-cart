const EachSaved = ({ brand,
    title,
    cartval,
    setCartVal,
    id,
    image,
    refresh,
    setRefresh,
    saved,
    price}) => {

        const moveToCart=(_id)=>{
            
        }

        const remove=(_id)=>{
            const confirmation = window.confirm(
                "are you sure you want to remove item from Saved?"
              );
              if (confirmation) {
                const removed =
                  saved &&
                  saved.length > 0 &&
                  saved.filter((i) => {
                    return i.id !== _id;
                  });
          
                localStorage.setItem("saved", JSON.stringify(removed));
                setRefresh(!refresh);
              }
        }

    return ( 
        <>
      <div key={id} className="eachcart-item">
        <p className="title">{title}</p>
        <img src={image} className="eachcart-image" alt="cart-image" />

        <span className="brand">{brand}</span>
        <span className="price">{price}$</span>
        <button onClick={() => remove(id)} className="remove">
          REMOVE
        </button>
        
        <button
          className="remove"
          onClick={() => {
            moveToCart(id);
          }}
        >
         MOVE BACK TO CART
        </button>
        <div>
        </div>
      </div>
    
    </> );
}
 
export default EachSaved;{}