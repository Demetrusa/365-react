

import react from "react";
import "./Product.css";
import firstLogo from "./ProductImages/1212.png";
import secondLogo from "./ProductImages/1212.png";
import thirdLogo from "./ProductImages/1212.png";
import fourthLogo from "./ProductImages/1212.png";

export default function Product (){
    return(
        <>
         <div class="row">
          <div class="porto-u-main-heading">
            <h2>HOW THE DROPSHIP BUSINESS WORKS?</h2>
          </div>
          <div class="porto-u-sub-heading">
            <p>
              Browse and select from our catalog. More than thousands of
              Dropship products available on various niches.
            </p>
            <p>365
              <strong>DROPSHIP</strong>  product catalog covers an extensive
              selection from some of the world’s best sellers</p>
          </div>
      </div>
      <div class="how-it-works">
          <div class="howItWorks-box">
            <div class="howItWorksImg">
              <img src={firstLogo} alt="howItWorks-img" class="howItWorks-img" />
            </div>
            <div class="howItWorks-text">
              <div class="howItWorks-content"></div>
              <h3>JOIN US</h3>
            </div>
            <div class="howItWorks-p">
              <p>Register to 365 <strong>DROPSHIP</strong></p>
            </div>
          </div>
          <div class="howItWorks-box">
            <div class="howItWorksImg">
              <img src={secondLogo} alt="howItWorks-img" class="howItWorks-img" />
            </div>
            <div class="howItWorks-text">
              <div class="howItWorks-content"></div>
              <h3 id="howit-works-h3">FILL YOUR STORE INVENTORY</h3>
            </div>
            <div class="howItWorks-p">
              <p>Choose, manage and sync products from the catalog directly to your online store</p>
            </div>
          </div>
          <div class="howItWorks-box">
            <div class="howItWorksImg">
              <img src={thirdLogo} alt="howItWorks-img" class="howItWorks-img" />
            </div>
            <div class="howItWorks-text">
              <div class="howItWorks-content"></div>
              <h3>GET ORDERS</h3>
            </div>
            <div class="howItWorks-p">
              <p>Choose manual or automatic synchronize between your online store orders and your shopping cart</p>
            </div>
          </div>
          <div class="howItWorks-box">
            <div class="howItWorksImg">
              <img src={fourthLogo} alt="howItWorks-img"  class="howItWorks-img"/>
            </div>
            <div class="howItWorks-text">
              <div class="howItWorks-content"></div>
              <h3>DIRECT SHIPPING</h3>
            </div>
            <div class="howItWorks-p">
              <p>We will automatically ship your orders directly to your customer</p>
            </div>
          </div>
        </div>
        </>
    )
}