import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AdminProfile from './AdminProfile'
import AddAdmin from './AddAdmin'
import Header from './Header'
import Navbar from '../../Project_Layouts/Navbar/Navbar'
//import DisplayRequestProduct from './components/IS_Components/DisplayRequestUser';



export default class Adminpage extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div>             
                <AdminProfile></AdminProfile>
            </div>
            </>


        )
    }
}
