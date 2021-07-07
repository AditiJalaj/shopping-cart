import { useEffect, useState } from "react";

const PriceSummary = ({  setCartVal,
    cartval,
    refresh,
    setRefresh}) => {

       //console.log('price summ from p',cartval)
       const [totalprice,setTotalprice]=useState(0)
       const [totalitem,setTotalitem]=useState(0)

        useEffect(()=>{
            console.log('useeffect from price summ ran')
            const cart_arr=JSON.parse(localStorage.getItem('cart'))
            cart_arr.length>0 && cart_arr.map((i)=>{
                setTotalprice(pv=>pv+i.price)
                setTotalitem(pv=>pv+i.item)
            })
            
        },[refresh])

    return ( <div className="price-summary">
       <strong> PRICE SUMMARY </strong>
       <p style={{display:"flex",justifyContent:"space-between"}}>
       <span>Price ({totalitem} items)</span>
       <span style={{fontWeight:'bolder',fontSize:"large"}}>{Math.floor(totalprice)}$</span>
       </p>

       <p  style={{display:"flex",justifyContent:"space-between"}}>
       <span>Delivery Charges</span>
       <span style={{fontWeight:'bolder',fontSize:"large"}}>FREE</span>
       </p>
       
       <p style={{display:"flex",justifyContent:"space-between",borderTop:'1px solid black',marginTop:'5px'}}>
       <strong>TOTAL AMOUNT</strong>
       <span>{Math.floor(totalprice)}</span>
       </p>
       
        </div> );
}
 
export default PriceSummary;