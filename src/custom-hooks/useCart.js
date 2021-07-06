import {useEffect, useState} from 'react'

const useCart=()=>{
    const [cartval,setCartVal]=useState([])

    const [refresh,setRefresh]=useState(false)
    useEffect(()=>{
        setCartVal(JSON.parse(localStorage.getItem('cart')))
    },[setCartVal,refresh])

    //cartval as a dependency gives memory leak
    
    return [cartval,setCartVal,refresh,setRefresh]
}

export default useCart;