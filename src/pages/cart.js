import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/actions/cart";


const Cart = ()=>{
    const cart = useSelector(state=>state?.cartReducer?.cart);
    const [items, setItem] = useState([]);
    const [total,setTotal] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
        setItem([...cart]);
        // console.log(cart);
        let sum = 0;
        cart?.forEach(c=>{
            sum+=c?.price;
        })
        setTotal(sum);
    
        
    },[cart])

    const remove = (data)=>{
        dispatch(cartActions.removeItem(data));
    }


    return(
        <>
        {/* {cart?.length || 0}
        {JSON.stringify(cart)}
        {items?.length} */}
        <h3>Cart {cart?.length}</h3>
        <div className="row">
            <div className="col-lg-6 cartbox">
                {
                    items?.map((data,key)=>(
                    <div key={key} className="item_box">
                        <img 
                        src="https://t3.ftcdn.net/jpg/01/05/57/38/240_F_105573812_cvD4P5jo6tMPhZULX324qUYFbNpXlisD.jpg"
                        // src={data?.image} 
                        />
                        <p>{data?.description}</p>
                        <div className="flexrow" style={{justifyContent:'space-between'}}>
                        <h3 style={{marginRight:'30px'}}>{data?.name} </h3>
                        <h4>${data?.price}</h4>
                        </div>
                        <div className="flexrow">

                       {data?.discount && <button className="" style={{marginRight:'20px'}}>Add Discount: ${data?.discount}</button>}
                       {data?.warranty && <button className="">Add Warranty: ${data?.warranty}</button>}
                        
                        </div>
                        <button onClick={()=>{ remove(data) }} className="btnn">Remove</button>

                    </div>
                    ))
                }

            </div>
            <div className="col-lg-6">
                <div className="flexcol">

                <h3>Cart Total</h3>
                 <span>Product Total:{total}</span>
                 {total>0 && <span>Tax: 10.25%</span>}
                </div>
            </div>

        </div>
        </>
    )
}

export default Cart;