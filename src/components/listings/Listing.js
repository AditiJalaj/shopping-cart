import useData from '../../custom-hooks/useData'
import Each from './Each';


const Listing = () => {

    const [data,setData]=useData()
    
    return ( 
        <>
        listing components
        
        <div className="listings">
          {data.length>0 && data.map((i)=>{
              return <Each key={i.id}
              id={i.id}
              brand={i.brand}
              title={i.title}
              category={i.category}
              image={i.image}
              price={i.price}
              />
          })}
        </div>
        </>);
}
 
export default Listing;