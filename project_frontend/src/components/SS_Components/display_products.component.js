import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Paginat from './pagination.component'
import Products from './product.component'
import CircularProgress from '@material-ui/core/CircularProgress';
import AdsShow1 from "../RS_Components/adsShow1";
import MainHome from "./MainHome";
import Footer from "../Project_Layouts/footer"

const DisplayProducts = () => {

   const [isLoading, setLoading] = useState(true)
   const [products, setProducts] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [postPerPage] = useState(8)


   useEffect(() => {
      setLoading(true)
      const getProducts = async () => {
         try {
            await axios.get('http://localhost:8070/products/displayProducts')
               .then((res) => {
                setProducts(res.data.existingProducts)
                  setLoading(false)
               })
               .catch((error) => {
                  console.log(error.message)
               })

         } catch (error) {
            console.log(error.message)
         }
      }
      getProducts()
   }, [])

   const indexOfLastPost = currentPage * postPerPage
   const indexOfFirstPost = indexOfLastPost - postPerPage
   const currentPost = products.slice(indexOfFirstPost, indexOfLastPost)
   
   if (isLoading) {
      return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
         <CircularProgress />
      </div>
   }

   let paginate = (pageNumber) => {
      return setCurrentPage(pageNumber)
   }

   return (
    <div style={{  backgroundImage: 'url(https://www.chamacomputers.lk/imgs/slider/pic3.jpg)', height: "100%" }} >
       <MainHome/>
      <div className="container">
      
         <AdsShow1/>
         <br/>
          <div className="row" style={{ paddingTop: 15 }}>
              {currentPost.map((products) => (
          <div key={products._id} className="col-lg-3 col-md-6">
            <div className="ui link cards">
              <Products
                key={products._id}
                productID={products._id}
                productName={products.productName}
                productPrice={products.productPrice}
                averageRating={products.averageRating}
                coverImage={products.coverImage}
                brandName={products.brandName}
                offerPrice={products.offerPrice}
              />
          </div>
          </div>
          ))}
        </div>
        <br/>
        <div className="d-flex justify-content-center customPagination" >
        <Paginat
            postPerPage={postPerPage}
            totalPosts={products.length}
            paginate={paginate}/>
        </div>
      </div>
      <Footer/>
  </div>
   )
}

export default DisplayProducts