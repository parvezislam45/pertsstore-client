import { useEffect, useState } from "react"

const useProduct =()=>{
    const [products,setProducts] =useState([])
    useEffect(()=>{
        fetch('https://gentle-peak-72216.herokuapp.com/product')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return [products,setProducts]
}
export default useProduct;