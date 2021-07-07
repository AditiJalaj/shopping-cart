import EachSaved from "./EachSaved";

const Saved = ({refresh,setRefresh,cartval,setCartVal}) => {


    var saved=JSON.parse(localStorage.getItem('saved'))
    if(saved===null) {
        saved=[]
    }

    return ( <div className="saved-container">
       <strong>SAVED ITEMS</strong> 
       {saved && saved.map((i)=>{
           return <EachSaved
           key={i.id}
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
 
export default Saved;