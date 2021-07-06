import EachCart from '../../components/cart/EachCart'

const CartContainer = ({cartval,setCartVal,refresh,setRefresh}) => {

    //console.log('from cart cont',cartval) // undefined after mount

    return ( <div className='cart-container'>
        Your cart
        {cartval===undefined ? "Your cart Is empty!": null}
        {cartval && cartval.length>0 && cartval.map((i)=>{
            return <EachCart key={i.id}
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
            />
        })}
        </div> );
}
 
export default CartContainer;