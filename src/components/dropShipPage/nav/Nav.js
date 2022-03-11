import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Nav.css";
import Logo1 from "./nav-img/dropship_logo.png";
import profileLogo from "./nav-img/profile.jpg";
import Gauge from "./nav-img/gauge-high-solid.svg";
import Cube from "./nav-img/cube-solid.svg";
import List from "./nav-img/list-solid.svg";
import Check from "./nav-img/square-check-solid.svg";
import ClipList from "./nav-img/clipboard-list-solid.svg";
import arrow from "./nav-img/arrows-left-right-solid.svg";
import Price from "./priceBar/Price";
import loop from "./magnifying-glass-solid.svg";




 function Nav () {  
     return(
         <>
        <div className="nav">
         <div className="logo">
         <img src={Logo1} alt="logo" />
         </div>
         <div className="drop">
            <img src={profileLogo} className="dropImg" alt="logo" />
            <ul className="nav-li">
                <li className="ul-li">
                   <a href="#"> <img src={Gauge} alt="" /></a> 
                </li>
                <li className="ul-li">
                <a href=""> <img src={List} alt="" /></a>
                </li>
                <li className="ul-li">
                   <a href=""> <img src={Cube} alt="" /></a>
                </li>
                <li className="ul-li">
                  <a href="">  <img src={Check} alt="" /></a>
                </li>
                <li className="ul-li">
                    <a href=""><img src={arrow} alt="" /></a>
                 </li>
                <li className="ul-li">
                  <a href="">  <img src={ClipList} alt="" /></a>
                </li>
            </ul> 
        </div>
        </div>   
            <div className="catalog">
                <div className="firstCatalogDropBox">
                    <select name="Choose Category" id="firstSelect">
                        <option value="Choose Categor">Choose Category</option>
                        <option value="ჩექმა">ჩექმა</option>
                        <option value="წინდა">წინდა</option>
                        <option value="ნასკი">ნასკი</option>
                        <option value="კეტი">კეტი</option>
                    </select>
                </div>
                <div className="SecondCatalogDropBox">
                <select name="Choose Niche" id="secondselect">
                        <option value="Choose Niche">Choose Niche</option>
                        <option value="what">what</option>
                        <option value="you">you</option>
                        <option value="need">need</option>
                        <option value="ha">ha</option>
                    </select>
                </div>
                <div className="shipForm">
                    <form action="text" id="shipForm" name="shipform">Ship Form</form>
                    <form action="text" id="shipTo" name="ship To">Ship To </form>
                    <form action="text" id="selectSupplier" name="selectSupplier">Select Supplier</form>
                </div>
                <div className="price-section">
                    <h2>Price Range</h2>
                    <Price />
                </div>
            </div>
            <div className="select-search-form">
                <div className="first-line">
                <div className="first-line-select"><a href="#">Select ALL</a></div>
                    <div className="first-name-text"><p>select 0 out of 0 products</p></div>
                    <div className="search">
                        <p>chometer</p>
                        <img src={loop} alt="img"  id="loop" />
                    </div>
                    <div className="help-button">
                        <button type="submit">? </button>
                        </div>
                </div>
                <div className="second-line">
                    <h2>Sort By:</h2>
                    <select name="New arrivals" id="new-arrivals">
                        <option value="New arrivals">New arrivals</option>
                        <option value="Price: High to Low ">Price: High to Low </option>
                        <option value=" Price: Low to High ">Price: Low to High</option>
                        <option value="Profit: Alphabetic">Profit: Alphabetic</option>
                        <option value="Profit: Non-Alphabetic">Profit: Non-Alphabetic</option>
                        </select>
                </div>
            </div>
        </>
     )
 }

 export default Nav;