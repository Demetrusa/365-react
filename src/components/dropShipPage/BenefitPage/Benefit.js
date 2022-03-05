import react from "react";

import "./Benefit.css"
import benefitlogo from "./benefitimg/group-52.svg";

export default function Benefit () {

    return (
        <div class="benefits">
        <div class="benefit-headings">
          <h2 id="benefit-main-heading">BENEFITS</h2>
          <p class="benefit-heading-p">Easily sync dropship products into your online shop.</p>
          <p class="benefit-heading-p">Manage your process manually or automatically, exporting all product details</p>
        </div>
        <div class="benefits-list">
          <div class="bendifts-list-left-box" >
            <div class="benefits-first-contet " id="left-box-padding">
              <div class="benefits-logo">
               <img src={benefitlogo} alt="benefitLogo" />
              </div>
              <div class="benefits-text">
                <h3>Only one point of contact
                </h3>
                <p>365<strong>DROPSHIP</strong>will take care of the supply chain, no need to talk to 
                  hundreds of different suppliers, just choose the products and we will take care of the rest!</p>
              </div>
            </div>
            <div class="benefits-second-content" >
              <div class="benefits-logo">
              <img src={benefitlogo} alt="benefitLogo" />
              </div>
              <div class="benefits-text">
                <h3>
                  Profit %
                </h3>
               <p>365<strong>DROPSHIP</strong>understands the business of dropshipping to its core and knows the value of a good deal.
                In 365<strong>DROPSHIP</strong>catalog you will find great products with the best profit margins available!</p>
              </div>
            </div>
          </div>
          <div class="benefits-list-right-box"  >
            <div class="benefits-list-rigt-content" >
            <div class="right-text-flex">
            <div class="benefits-logo">
            <img src={benefitlogo} alt="benefitLogo" />
            </div>
            <div class="benefits-text">
              <h3>
                Unique international suppliers
              </h3>
             <p>365<strong>DROPSHIP</strong>experienced team works only with trusted and secured suppliers chosen from 
               all over the world! Every Supplier at 365<strong>DROPSHIP</strong> is certified</p>
            </div>
            </div>
            <div class="right-second-flex">
            <div class="benefits-logo" id="benefit-padding" >
            <img src={benefitlogo} alt="benefitLogo" />
            </div>
            <div class="benefits-text" id="benefits-text-2">
              <h3>
                Most advanced UI
              </h3>
             <p>The 365<strong>DROPSHIP</strong>platform has been around for a while, but we recently updated all of our technology in order to supply the best user experience for you and for your customers.
              Come and check it out!</p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    )
}