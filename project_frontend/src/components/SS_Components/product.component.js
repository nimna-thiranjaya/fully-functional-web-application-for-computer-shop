import React, { useState } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import StarRating from "stars-rating";
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';


const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} style={{ textAlign: 'center' }} />;
 }

 const offer = ()=> {
   offerPrice
 }
 
 const Products = ({ productID, productName, productPrice, averageRating, coverImage,brandName,offerPrice}) => {
    const [open, setOpen] = useState(false);
 
    const mainhome = () => {
       window.location = `/products/${productID}`
    }
 
    const handleClose = (reason) => {
       if (reason === 'clickaway') {
          return;
       }
       setOpen(false);
    };
 
    return (
       <div style={{width: 260, paddingBottom: 15}}>  
         <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'left',
         }}>

         </Snackbar>

           <div class="card"  style={{ background: "#1A233A",color:"#FFFFFF",}} align="center">
           <div style={{overflow: 'hidden', height: 300}} >

           <img src={coverImage} width={258} onClick={mainhome} id="sa_image" />

           </div>
           <div class="content text-color p-2" >   
           <div style={{ fontSize:23,fontWeight:"bold"}} >
             
             {productName.length > 13 ? <div >{productName.substr(0, 14)}...</div> : productName}  </div>         
             <div class="description text-color" >
              Brand : {brandName}
           </div>
             <Typography component={'span'} variant={'body2'}>
               <div className="row" style={{ paddingLeft: 0 }} >
             <label>
             
                 <div style={{ pointerEvents: "none", paddingLeft: 20}} >
                       <StarRating
                         count={5}
                         size={25}
                         value={averageRating}
                         color2={"#eb8a2f"}
                       />
                     </div> 
                        
                 </label>
               
                 <label style={{ fontSize: 18, paddingTop: 5, paddingLeft: 5 }}>
                 {averageRating}
                 </label>
               </div> 
               <div className="text-color" style={{fontSize: 18, paddingBottom: 8}}>LKR {productPrice}.00</div>
               <div className="text-color" style={{fontSize: 18, paddingBottom: 8,color:"red"}}>OFFER LKR {offerPrice}.00</div>
             </Typography>
           </div>
           <div class="extra content"></div>
         </div>
       </div>
    );
 
 }
 
 export default Products