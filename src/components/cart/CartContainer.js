import EachCart from '../../components/cart/EachCart'
import PriceSummary from '../PriceSummary';
import Saved from '../cart/saved/Saved'

const CartContainer = ({cartval,setCartVal,refresh,setRefresh}) => {

    //console.log('from cart cont',cartval) // undefined after mount
    var items=0;
    if( cartval!==null && cartval!==undefined){
        cartval.map((i)=>{
           return items=items+1;
        })
    }

    return ( 
        <>
        <div className="cart-adjacent">
        <div className='cart-container'>
        <strong>MY CART({items})</strong>
        {cartval===undefined ? "Please Refresh": null}
        {cartval!==null && cartval!==undefined && cartval.length>0 && cartval.map((i)=>{
            return (<EachCart key={i.id}
            setCartVal={setCartVal}
            cartval={cartval}
            id={i.id}
            brand={i.brand}
            title={i.title}
            category={i.category}
            image={i.image}
            price={i.price}
            refresh={refresh}
            setRefresh={setRefresh}
            />)
        })}
        </div>
        
        
        <PriceSummary
        setCartVal={setCartVal}
        cartval={cartval}
        refresh={refresh}
        setRefresh={setRefresh}
        />
        

        </div>
        <Saved
        cartval={cartval}
        refresh={refresh}
        setRefresh={setRefresh}
        setCartVal={setCartVal}
        />
        </>
        );
}
 
export default CartContainer;