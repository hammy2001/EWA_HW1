import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";

const Header=()=>{

	const dispatch = useDispatch();
	const history = useNavigate();

	const handlelogout = ()=>{
		dispatch(userActions.logout());
		history('/')
	}

    return(
        <header>
	<div class="width">
    		<h1><a href="/home">Company<span>Name</span></a></h1>
       	</div>
           <nav>
	<div class="width">
    		<ul>
        		<li class="start selected"><a href="/home">Home</a></li>
        	    <li class=""><a href="/lighting?maker=all">Lightings</a></li>
         	   	<li><a href="#">Products</a></li>
          	  	<li><a href="#">Solutions</a></li>
          	 	<li><a href="/cart">Cart</a></li>
          	 	<li><a href="/account">Account</a></li>
          	 	<li><a href="" onClick={handlelogout}>Logout</a></li>
        	</ul>
	</div>
    </nav>
    </header>
    )
};

export default Header;