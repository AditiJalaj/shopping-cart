import { useEffect, useState } from "react";

const PriceSummary = ({  setCartVal,
    cartval,
    refresh,
    setRefresh}) => {

       //console.log('price summ from p',cartval)
       var initialprice=0;
       cartval!==null && cartval!==undefined &&  cartval.map((i)=>{initialprice+=i.price});

       var initialitem;
       cartval!==null && cartval!==undefined ? initialitem=cartval.length : initialitem=0;

       const [totalprice,setTotalprice]=useState(initialprice)
       const [totalitem,setTotalitem]=useState(initialitem)

        useEffect(()=>{
            console.log('useeffect from price summ ran')
            const cart_arr=JSON.parse(localStorage.getItem('cart'))
            cart_arr!==null && cart_arr!==undefined && cart_arr.length>0 &&  cart_arr.map((i)=>{
                setTotalprice(pv=>pv+i.price)
                setTotalitem((pv)=>pv+1)
            })

        },[refresh])

    return ( <div className="price-summary">
       <strong> PRICE SUMMARY </strong>
       <p style={{display:"flex",justifyContent:"space-between"}}>
       <span>Price ({totalitem}) item(s)</span>
       <span >{Math.floor(totalprice)}$</span>
       </p>

       <p  style={{display:"flex",justifyContent:"space-between"}}>
       <span>Delivery Charges</span>
       <span style={{fontWeight:'bolder',fontSize:"large"}}>FREE</span>
       </p>
       
       <p style={{display:"flex",justifyContent:"space-between",borderTop:'1px solid black',marginTop:'5px'}}>
       <strong>TOTAL AMOUNT</strong>
       <span style={{fontWeight:'bolder',fontSize:"500"}}>{Math.floor(totalprice)}$</span>
       </p>
       
        </div> );
}
 
export default PriceSummary;