import React from "react";
import { Link } from "react-router-dom"

function Navbar() {

	return (
		<nav>
		<div id="navbar">
		  <div className="logo"><a href="#">DONUT</a></div>
		    <div className="nav-links">
		      <li><a href="#">Search</a></li>
		      <li>
			<Link to= "/all">ALL</Link>
		      </li>
		      <li>
			<a href="#">COMUNITY</a>
			<ul className="js-sub-menu sub-menu">
			  <li><Link to= "/post">POST</Link></li>
			  <li><Link to= "/freetalk">FREE_TALK</Link></li>
			</ul>
		      </li>
		      <li>
			<Link to= "/login">LOGIN</Link>
		      </li>
		  </div>
	    
		 
		</div>
		</nav>
	    
	      );


}

export default Navbar;
