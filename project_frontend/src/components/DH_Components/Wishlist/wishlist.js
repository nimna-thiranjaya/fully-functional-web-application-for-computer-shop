import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
// import Update from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';

const Wishlist = () => {
   const [wishlist, setWishlist] = useState([])
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
 };


   useEffect(() => {
      const getWishlistItems = async () => {
         try {
            const config = {
               headers: {
                  Authorization: localStorage.getItem("Authorization")
               },
            }
            await axios.get(`http://localhost:8070/wishlist/display`, config)
               .then((res) => {
                  setWishlist(res.data.wishlist)
                  setLoading(false)
               })
               .catch((error) => {
                  console.log(error.message)
               })
         } catch (error) {
            console.log(error.message)
         }
      }
      getWishlistItems()
   }, [])


//    const generateReport = async () => {
//       const obj = {wishlistItems: wishlist}
//       await axios.post('http://localhost:8059/report-generator/generatewishlistreport', obj).then(() => {
//         alert('Report generated')
//       }).catch((err) => {
//         console.log(err.message)
//       })
//    }

   return (
      <div>
         {wishlist.length !== 0 ?
            <div>
               <h3>My Wishlist</h3>
               <hr />
               <table className="table table-bordered">
                  <thead>
                     <tr>
                        <th scope="col">ITEM NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">COVER</th>
                        <th scope="col">DELETE</th>
                     </tr>
                  </thead>
                  <tbody>
                     {wishlist.map((row) => (
                        <tr>
                           <td>{row.productName}</td>
                           <td>{row.productPrice}</td>
                           <td>{row.coverImage}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="d-flex justify-content-end" style={{ paddingTop: 10 }}>
                  <div className="row">
                     {/* <label>
                        <Button variant="outlined" startIcon={<Update />} style={{ borderRadius: 25, width: 190, marginRight: 10 }}
                        onClick={generateReport}>
                           GENERATE REPORT
                     </Button>
                     </label> */}
                     <label>
                        <Button variant="outlined" startIcon={<DeleteIcon />} style={{ borderRadius: 25, width: 150 }}></Button>
                     </label>
                  </div>
               </div>
            </div>
            : <div></div>}
      </div>
   )
}

export default Wishlist