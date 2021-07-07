const PriceSummary = ({  setCartVal,
    cartval,
    refresh,
    setRefresh}) => {

       // console.log('price summ from p',cartval)
        var totalprice=0;
        var totalitem=0
       cartval!==undefined &&  cartval.map((i)=>{
            totalprice+=i.price
            totalitem+=1;
        })

    return ( <div className="price-summary">
       <strong> PRICE SUMMARY </strong>
       <p style={{display:"flex",justifyContent:"space-between"}}>
       <span>Price ({totalitem} items)</span>
       <span style={{fontWeight:'bolder',fontSize:"large"}}>{totalprice}$</span>
       </p>

       <p  style={{display:"flex",justifyContent:"space-between"}}>
       <span>Delivery Charges</span>
       <span style={{fontWeight:'bolder',fontSize:"large"}}>FREE</span>
       </p>
       
       <p style={{display:"flex",justifyContent:"space-between",borderTop:'1px solid black',marginTop:'5px'}}>
       <strong>TOTAL AMOUNT</strong>
       <span>{totalprice}</span>
       </p>
       
        </div> );
}
 
export default PriceSummary;