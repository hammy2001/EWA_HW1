import React from "react";

const Header=()=>{
    return(
        <header>
	<div class="width">
    		<h1><a href="/">Company<span>Name</span></a></h1>
       	</div>
           <nav>
	<div class="width">
    		<ul>
        		<li class="start selected"><a href="index.html">Home</a></li>
        	    	<li class=""><a href="examples.html">Examples</a></li>
         	   	<li><a href="#">Products</a></li>
          	  	<li><a href="#">Solutions</a></li>
          	 	<li class="end"><a href="#">Contact</a></li>
        	</ul>
	</div>
    </nav>
    </header>
    )
};

export default Header;