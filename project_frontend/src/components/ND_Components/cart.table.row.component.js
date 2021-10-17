import React, { useState } from 'react'
import axios from 'axios'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Delete from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
   return <MuiAlert elevation={6} variant="filled" {...props} style={{ textAlign: 'center' }} />;
}

const useStyles = makeStyles({
   root: {
      width: '100%',
   },
   container: {
      maxHeight: 420,
   },
});

const TableRowItem = ({ pid, pName, pPrice, quantity }) => {
   const classes = useStyles();
   const [productId, setProductId] = useState(pid)
   const [productname, setProductname] = useState(pName)
   let [productPrice, setProductPrice] = useState(pPrice)
   let [productQuantity, setQuantity] = useState(quantity)
   let tempPrice = productPrice * quantity
   let [totalPrice, setTotalPrice] = useState(tempPrice)
   const [open, setOpen] = useState(false);

   const decrementItem = React.useCallback(() => setQuantity(c => c - 1), [])
   const incrementItem = React.useCallback(() => setQuantity(c => c + 1), [])
   const setFinalQuantity = React.useCallback(() => setQuantity(0), [])

   const handleClose = (reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setOpen(false);
   };

   const deleteCartItem = async () => {
      const config = {
         headers: {
            Authorization: localStorage.getItem("Authorization"),
            "content-type": "application/json",
         },
      };
      await axios.delete(`http://localhost:8070/cart/delete/${productId}`, config)
         .then(() => {
            console.log('deleted')
            window.location = '/inventory'
            return (
               <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                  <Alert severity="warning">
                     Please give your rating for product
                  </Alert>
               </Snackbar>
            )
         }).catch((error) => {
            console.log(error.message)
         })
   }


   return (

      <TableRow hover role="checkbox" tabIndex={-1} key={productId}>
         <TableCell key={productId} >
            {productId}
         </TableCell>
         <TableCell>
            {productname}
         </TableCell>
         <TableCell>
            {productQuantity}
         </TableCell>
         <TableCell>
            {productPrice}
         </TableCell>
         <TableCell>
            {totalPrice}
         </TableCell>
         <TableCell>
            <div className="row">
               <label>
                  <IconButton aria-label="delete" className={classes.margin} onClick={quantity <= 0 ? setFinalQuantity : decrementItem}>
                     <Remove fontSize="small" />
                  </IconButton>
               </label>
               <label>
                  <IconButton aria-label="delete" className={classes.margin} onClick={quantity <= 0 ? setFinalQuantity : incrementItem}>
                     <Add fontSize="small" />
                  </IconButton>
               </label>
            </div>
         </TableCell>
         <TableCell>
            <IconButton aria-label="delete" className={classes.margin} onClick={deleteCartItem}>
               <Delete fontSize="small" />
            </IconButton>
         </TableCell>
      </TableRow>
   )
}

export default TableRowItem