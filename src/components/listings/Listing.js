import useData from '../../custom-hooks/useData'
import Each from './Each';
import {Cart} from '../../context/context'
import {useContext} from 'react'


const Listing = ({cartval,setCartVal,refresh,setRefresh}) => {

    const [data,setData]=useData()

    //not using context here
    //const [cart,setCart]=useContext(Cart)
   
    return ( 
        <>
        <div className="listings">
          {data.length>0 && data.map((i)=>{
              return <Each key={i.id}
              id={i.id}
              brand={i.brand}
              title={i.title}
              category={i.category}
              image={i.image}
              price={i.price}
              cartval={cartval}
              setCartVal={setCartVal}
              refresh={refresh} 
              setRefresh={setRefresh}
              />
          })}
        </div>

        
        </>);
}
 
export default Listing;