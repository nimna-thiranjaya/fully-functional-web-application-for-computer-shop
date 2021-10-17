import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import BuyNow from '@material-ui/icons/MonetizationOnRounded'
import Button from "@material-ui/core/Button";
import Update from '@material-ui/icons/Update'

const Cart = () => {
   const [cart, setCart] = useState([])
   const [loading, setLoading] = useState(true)
   let [quantity, setQuantity] = useState(0)

   useEffect(() => {
      setLoading(true)
      const getCartItems = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get(`http://localhost:8070/cart/display`, config)
               .then((res) => {
                  setCart(res.data.cart)
                  setLoading(false)
               })
               .catch((error) => {
                  console.log(error.message)
               })
         } catch (error) {
            console.log(error.message)
         }
      }
      getCartItems()
   }, [])

   if (loading) {
      return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
         <CircularProgress hidden={true} />
      </div>
   }

   const generateReport = async () => {
      const obj = {cartItems: cart}
      await axios.post('http://localhost:8070/report-generator/generatecartreport', obj).then(() => {
        alert('Report generated')
      }).catch((err) => {
        console.log(err.message)
      })
   }

   return (
      <div>
         {cart.length !== 0 ?
            <div>
               <h3>My Cart</h3>
               <hr />
               <table className="table table-bordered">
                  <thead>
                     <tr>
                        <th scope="col">ITEM CODE</th>
                        <th scope="col">ITEM NAME</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">TOTAL PRICE</th>
                        <th scope="col">CHANGE</th>
                        <th scope="col">DELETE</th>
                     </tr>
                  </thead>
                  <tbody>
                     {cart.map((row) => (
                        <tr>
                           <td>{row._id}</td>
                           <td>{row.productname}</td>
                           <td>{row.quantity}</td>
                           <td>{row.productPrice}</td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="d-flex justify-content-end" style={{ paddingTop: 10 }}>
                  <div className="row">
                     <label>
                        <Button variant="outlined" startIcon={<BuyNow />} style={{ borderRadius: 25, width: 150 }}>
                           BUY NOW
                     </Button>
                     </label>
                  </div>
               </div>
            </div>
            : <div></div>}
      </div>
   )
}

export default Cart