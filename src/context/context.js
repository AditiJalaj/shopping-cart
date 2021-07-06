import {createContext,useEffect,useState} from 'react'

const Cart=createContext([])

const Context = (props) => {

  const [cart,setCart]=useState([])
   const get=JSON.parse(localStorage.getItem('cart'))
  
   useEffect(()=>{
       if(get){
           setCart(get)
       }
   },[setCart])

    return ( 
        <Cart.Provider value={[cart,setCart]}>
        {props.children}
        </Cart.Provider>
     );
}
 
export default Context;
export {Cart}