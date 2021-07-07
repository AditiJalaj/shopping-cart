import {useState} from 'react'

const EachCart = ({brand,
    title,
    cartval,
    setCartVal,
    id,
    image,
    refresh,
    setRefresh,
    price}) => {
        const [quan,setQuan]=useState(1)
        const [updatedPrice,setUpdatedPrice]=useState(price)


        const inc=(_id)=>{
            setQuan((pv)=>pv+1)
            setUpdatedPrice((pv)=>pv+price)
           
            const found = cartval.find(i => i.id===_id);
            found.price=updatedPrice;
           //logic for setval to update price in ls
        }

        const dec=(_id)=>{
           if(quan>1){
            setQuan((pv)=>pv-1)
            setUpdatedPrice((pv)=>pv-price)
           
            const found = cartval.find(i => i.id===_id);
            found.price=updatedPrice;
            //logic for setval
           } 
        }
        
        const remove=(_id)=>{
           const confirmation= window.confirm("are you sure you want to remove item from cart?")
            if(confirmation){
                const removed=cartval && cartval.length>0 && cartval.filter((i)=>{
                return i.id!==_id 
            })
        
            setCartVal(localStorage.setItem('cart',JSON.stringify(removed))) 
            setRefresh(!refresh)
        }
        }

        
    return ( <>
        <div key={id} className="eachcart-item">
        <p className="title">{title}</p>
         <img src={image} className="eachcart-image" alt="cart-image" />
      
        <span className="brand">{brand}</span>
     
        <span style={{fontWeight:"bolder",fontSize:"30px",margin:"8px",padding:"2px"}}>
        {updatedPrice}$</span>
      

      <button  onClick={() =>remove(id)} className="remove">
       REMOVE
      </button>
      <button> SAVE FOR LATER </button>
      <div>
      <button onClick={()=>{dec(id)}}>-</button>
      <span>{quan}</span>
      <button onClick={()=>{inc(id)}}>+</button>
      </div>
    </div>
    
    </> );
}
 
export default EachCart;