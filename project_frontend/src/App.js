import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import InventoryPage from './components/SS_Components/InventoryPage';
import CartPage from './components/ND_Components/CartPage'
import CheckOutPage from './components/ND_Components/CheckoutPage'
import CreateRequestproduct from './components/IS_Components/createRequest';
import CusRegistration from "./components/DH_Components/Customer/CusRegistration";
import CusLogin from "./components/DH_Components/Customer/CusLogin";
import CusProfile from "./components/DH_Components/Customer/CusProfile";
import CusUpdate from "./components/DH_Components/Customer/CusUpdate";
import DisplayProducts from './components/SS_Components/display_products.component';
import ProductPage from "./components/SS_Components/ProductPage";
import aboutus from "./components/SS_Components/About_Us"

//admin
import AdminLogin from './components/NT_Components/Admin/AdminLogin';
import AddAdmin from './components/NT_Components/Admin/AddAdmin';
//import Header from "./components/Admin/Header";
//import AdminProfile from "./components/Admin/AdminProfile";
//import UpdateProfile from "./components/Admin/UpdateAdmin";
//import Navbar from './components/Navbar/Navbar';
import DiscountEdit from './components/NT_Components/discount/DiscountEdit'
import DiscountPage from './components/NT_Components/discount/DiscountPage'
//import AdminLogin from './components/Admin/AdminLogin';
import Adminpage from './components/NT_Components/Admin/Adminpage';
import backend from './components/Project_Layouts/backend';
import EditProduct from "./components/SS_Components/EditProduct";
import ProductDetails from "./components/SS_Components/ProductDetails";
import Admin_Feedback_Section from "./components/AA_Components/Admin_Feedback_Section";
import CreateFeedback from './components/AA_Components/create-feedback.component';
import Feedbacks from './components/AA_Components/feedbacks.component';
import dashboard from './components/Project_Layouts/dashboard';
import adminRequest from "./components/IS_Components/adminRequest";
import DeliveryPage from './components/RD_Components/DeliveryPage';
import DeliveryDetails from './components/RD_Components/DeliveryDetails';
import EditDelivery from './components/RD_Components/EditDelivery';
import CreateDelivery from './components/RD_Components/CreateDelivery';
import Ordertable from './components/RD_Components/OrderHome';
import CreateAds from "./components/RS_Components/CreateAds";
import adsHome from './components/RS_Components/AdsHome';
import EditAds from "./components/RS_Components/EditAds";
import AdsDetails from "./components/RS_Components/AdsDetails";
import adsShow1 from "./components/RS_Components/adsShow1"
import homepage from "./components/SS_Components/display_products.component"



 
function App() {
  return (
    <Router>
      <div>
      
      <Route path="/signup" exact component={CusRegistration}/>
      <Route path="/login" exact component={CusLogin}/>
      <Route path="/profile" exact component={CusProfile}/>
      <Route path="/update" exact component={CusUpdate}/>
      <Route path="/inventory" exact component={InventoryPage}/>
      <Route path="/cart" component={CartPage} exact />
      <Route path="/checkout" component={CheckOutPage} exact/>
      <Route path="/requestproduct" exact component={CreateRequestproduct}/>
      <Route path="/" exact component={DisplayProducts}/>
      <Route path= "/products/:id" component ={ProductPage}/>
      <Route path= "/aboutUs" component ={aboutus}/>
      <Route path= "/home1" component ={homepage}/>
      </div>


          <Route path="/adminlogin" exact component={AdminLogin}/>
          <Route path="/backend" exact component={backend}/>
          <Route path="/discount" exact component={DiscountPage}/>
          <Route path="/update/:id" exact component={DiscountEdit}/>
          <Route path="/admin" exact component={ Adminpage}/>
          <Route path="/add" exact component={AddAdmin}/>
          <Route path="/inventory" exact component={InventoryPage}/>
          <Route path= "/edit/:productID" component ={EditProduct}/>
          <Route path="/adadd" component={CreateAds}/>
          <Route path="/advertisement" component = {adsHome}/>
          <Route path="/adupdate/:adID" component={EditAds}/>
          <Route path="/ads/:adID" component={AdsDetails}/>
          <Route path="/adsShow1" component={adsShow1}/>
          <Route path="/delivery" exact component={DeliveryPage}></Route>
          <Route path="/deliveryedit/:deliveryID" component={EditDelivery}></Route>
          <Route path="/deliverys/:deliveryID" component={DeliveryDetails}></Route>
          <Route path="/deliveryadd" component={CreateDelivery}></Route>
          <Route path= "/requests" exact component={adminRequest}/>
          <Route path="/feedback" component={Admin_Feedback_Section}/>
          <Route path="/dashBoard" exact component={dashboard}/>
    </Router>
  );
}
 
export default App;
 /*
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddAdmin from './components/NT_Components/Admin/AddAdmin';
import AdminLogin from './components/NT_Components/Admin/AdminLogin';
//import Header from "./components/Admin/Header";
//import AdminProfile from "./components/Admin/AdminProfile";
//import UpdateProfile from "./components/Admin/UpdateAdmin";
//import Navbar from './components/Navbar/Navbar';
import DiscountEdit from './components/NT_Components/discount/DiscountEdit'
import DiscountPage from './components/NT_Components/discount/DiscountPage'
//import AdminLogin from './components/Admin/AdminLogin';
import Adminpage from './components/NT_Components/Admin/Adminpage';
import backend from './components/Project_Layouts/backend';
import InventoryPage from './components/SS_Components/InventoryPage';
import EditProduct from "./components/SS_Components/EditProduct";
import ProductDetails from "./components/SS_Components/ProductDetails";
import MainHome from './components/SS_Components/MainHome';
import Admin_Feedback_Section from "./components/AA_Components/Admin_Feedback_Section";
import CreateFeedback from './components/AA_Components/create-feedback.component';
import Feedbacks from './components/AA_Components/feedbacks.component';
import dashboard from './components/Project_Layouts/dashboard';
import adminRequest from "./components/IS_Components/adminRequest";
import DeliveryPage from './components/RD_Components/DeliveryPage';
import DeliveryDetails from './components/RD_Components/DeliveryDetails';
import EditDelivery from './components/RD_Components/EditDelivery';
import CreateDelivery from './components/RD_Components/CreateDelivery';
import Ordertable from './components/RD_Components/OrderHome';
import CreateAds from "./components/RS_Components/CreateAds";
import adsHome from './components/RS_Components/AdsHome';
import EditAds from "./components/RS_Components/EditAds";
import AdsDetails from "./components/RS_Components/AdsDetails";
import adsShow1 from "./components/RS_Components/adsShow1"
 
 
 
 
function App() {
  return (
    <>
       <Router>
          <Route path="/adminlogin" exact component={AdminLogin}/>
          <Route path="/backend" exact component={backend}/>
          <Route path="/discount" exact component={DiscountPage}/>
          <Route path="/update/:id" exact component={DiscountEdit}/>
          <Route path="/admin" exact component={ Adminpage}/>
          <Route path="/add" exact component={AddAdmin}/>
          <Route path="/inventory" exact component={InventoryPage}/>
          <Route path= "/edit/:productID" component ={EditProduct}/>
          <Route path= "/products/:productID" component ={ProductDetails}/>
          <Route path="/adadd" component={CreateAds}/>
          <Route path="/advertisement" component = {adsHome}/>
          <Route path="/adupdate/:adID" component={EditAds}/>
          <Route path="/ads/:adID" component={AdsDetails}/>
          <Route path="/adsShow1" component={adsShow1}/>
          <Route path="/delivery" exact component={DeliveryPage}></Route>
          <Route path="/deliveryedit/:deliveryID" component={EditDelivery}></Route>
          <Route path="/deliverys/:deliveryID" component={DeliveryDetails}></Route>
          <Route path="/deliveryadd" component={CreateDelivery}></Route>
          <Route path= "/requests" exact component={adminRequest}/>
          <Route path="/feedback" component={Admin_Feedback_Section}/>
          <Route path="/products/:productID" component={CreateFeedback}/>
          <Route path="/products/:productID" component={Feedbacks}/>
          <Route path= "/mainhome" component ={MainHome}/>
          <Route path="/dashBoard" exact component={dashboard}/>
      </Router>
 
    </>
  );
}
 
export default App;*/
 

