import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productsActions } from "../redux/actions/products";


let obj={
     "brand": "",
    "maker": "",
    "name": "",
    "image": "",
    "description": "",
    "id": "",
    "price": 0,
    "discount": 0,
    "warranty": 0,
}
const Account =()=>{

    const isAuthenticated = useSelector((state)=>state?.userReducer?.isAuthenticated);
    const history = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [addprod, setAddProd] = useState(null);
    const [category, setCategory] = useState('');
    const [frm, setFrm]=useState(obj)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(query?.create === 'product'){
            setAddProd(true);
        }
    },[query])

    const handlechange = (e)=>{
        if(e.target.name === 'category'){
            setCategory(e.target.value);
        }
        else if (e.target.name === 'brand'){
            setFrm({...frm, ['brand']: e.target.value, 'maker': e.target.value});
        }
        else if (e.target.name === 'name'){
            setFrm({...frm, ['name']: e.target.value});
        }
        else if (e.target.name === 'image'){
            setFrm({...frm, ['image']: e.target.value});
        }
        else if (e.target.name === 'description'){
            setFrm({...frm, ['description']: e.target.value});
        }
        else if (e.target.name === 'id'){
            setFrm({...frm, ['id']: e.target.value});
        }
        else if (e.target.name === 'price'){
            setFrm({...frm, ['price']: parseInt(e.target.value)});
        }
        else if (e.target.name === 'discount'){
            setFrm({...frm, ['discount']: parseInt(e.target.value)});
        }
        else if (e.target.name === 'warranty'){
            setFrm({...frm, ['warranty']: parseInt(e.target.value)});
        }
        

    }

    // "brand": "Havells",
    // "maker": "Havells",
    // "name": "Havells syllium",
    // "image": "",
    // "description": "Lorem ipsum magnate",
    // "id": "hv101",
    // "price": 200,
    // "discount": 10,
    // "warranty": 200,
    // "rebate": 50,

    const handaddsubmit=()=>{
        if(addprod){
            let obj={
                ...frm, 
                header:category,
               
            }
            dispatch(productsActions.addProduct(obj));
        }
    }


    return(
        <>
       {
        (()=>{
            switch(isAuthenticated?.usertype){
                case 'storagemanager':
                    return(
                        <>
                        {JSON.stringify(query)}
                       <div><button onClick={()=>{history('/account?create=product')}}>  + Add new product</button> </div>
                        {
                            addprod && <>
                            <h4>Add Product</h4>
                            <label>Choose Category:
                                <select name="category" id="category" onChange={handlechange} >
                                    <option value="">Select</option>
                                    <option value="lighting">Lighting</option>
                                    <option value="speaker">Speaker</option>
                                    <option value="doorbell">Doorbell</option>
                                    <option value="doorlock">Doorlock</option>
                                    <option value="thermostat">Thermostat</option>
                                </select>
                            </label>

                            {
                                category && <div className="flexcol" style={{width:'200px'}}>
                                    <label>Add brand</label>
                                    <input onChange={handlechange}  type="text" name="brand"/>
                                    <label>Add name</label>
                                    <input onChange={handlechange} type="text" name="name"/>
                                    <label>Add description</label>
                                    <input onChange={handlechange} type="text" name="description"/>
                                    <label>Add id</label>
                                    <input onChange={handlechange} type="text" name="id"/>
                                    <label>Add price</label>
                                    <input onChange={handlechange} type="text" name="price"/>
                                    <label>Add discount</label>
                                    <input onChange={handlechange} type="text" name="discount"/>
                                    <label>Add warranty</label>
                                    <input onChange={handlechange} type="text" name="warranty"/>
                                    <button type="submit" onClick={handaddsubmit} >Submit</button>
                                </div>
                            }


                            </>
                        }
                       <div className="row">{
                        <div className="col-lg-4">

                        </div>
                        }
                       </div>










                        </>
                    )
                case 'salesman':
                    return(
                        <>
                        <h2>I am salesman</h2>
                        </>
                    )
                 case 'customer':
                    return(
                        <>
                        <h2>I am customer</h2>
                        </>
                    )
                default : return <> </>
            }
        })()
       }
        </>
    )
}

export default Account;