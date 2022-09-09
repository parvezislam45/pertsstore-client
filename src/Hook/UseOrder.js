import { useEffect, useState } from "react"

const useOrder =orderId =>{
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const url = `https://gentle-peak-72216.herokuapp.com/product/${orderId}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setProduct(data))
    },[orderId])
    
    return [product,setProduct]
}
export default useOrder