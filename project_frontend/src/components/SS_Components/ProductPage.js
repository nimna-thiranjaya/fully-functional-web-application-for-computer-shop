import React, { useEffect, useState } from "react";
import ProductInfromation from "./ProductDetails";
import Feedbacks from "../AA_Components/feedbacks.component";
import MainHome from "./MainHome";
import Footer from "../Project_Layouts/footer"

const ProductPage = (props) => {
  const productId = props.match.params.id;
  return (
    <div className="abody">
       <MainHome/>
      <center>
      <ProductInfromation productId={productId} />
      </center>
      
      <Feedbacks productId={productId} />

      <Footer/>
      
    </div>
  );
};

export default ProductPage;