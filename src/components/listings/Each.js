import {useRef,useContext, useEffect} from 'react'
import {Cart } from '../../context/context'

const Each = ({ brand, title, category,id, image, price }) => {

    const btnRef=useRef(null)
 
    //value is undefined once
     const value=useContext(Cart) //array of cart =[] and setCart fnction
     console.log('hi ',value) //gives undefined once- fixed by default value for createContext

        const cart=value[0]
        const setCart=value[1]
        console.log('cart',cart)   //gives undefined before giving []

     
    const addtoCart=(_id)=>{
        console.log("id",_id)
        btnRef.current.style.backgroundColor="blue"
      
        //setCart to update logic of local stroage
       
    }

  return (
    <div className="each-item">
      <img src={image} alt="product image" />
      <div>
        <p className='brand'>{brand}</p>
        <span className='title'>{title}</span>
        <span className='price'>{price}$</span>
      </div>

      <button ref={btnRef}
      onClick={()=>addtoCart(id)} className="addtocart">Add to Cart</button>
    </div>
  );
};

export default Each;
