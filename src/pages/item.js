import queryString from "query-string";
import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const Item=()=>{
    const params = useParams();
    const location = useLocation();
    const query = queryString.parse(location.search);
    // const path = location?.pathname;
    const products = useSelector(state=>state?.productsReducer?.products);
    const [item,setItem] = useState([]);

    useEffect(()=>{
// console.log( location.pathname);
    setItem([...products])

    },[query])


    
    

    return (
        <p>
            sdlkaslkalkm
            {query?.maker}{query?.id}
        </p>
    )
}

export default Item;