import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.js'
import {Login,Signup} from './Pages/Login.js'
import UnitConvertor from "./Pages/UnitConvertor";
import ROI from "./Pages/ROI";
import AdminPanel from "./Pages/AdminPanel";
import Order from "./Pages/Order";
import Payment from "./Pages/Payment";
import BuyProperty from "./Pages/BuyProperty";
import Profile from "./Pages/Profile";
import ViewProperty from "./Pages/ViewProperty";
import Addproperty from "./Pages/Addproperty"

function App(){
  return(
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/unit" element={<UnitConvertor/>}/>
          <Route exact path="/roi" element={<ROI/>}/>
          <Route exact path="/admin" element={<AdminPanel/>}/>
          <Route exact path="/order" element={<Order/>}/>
          <Route exact path="/payment" element={<Payment/>}/>
          <Route exact path="/buy" element={<BuyProperty/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/view" element={<ViewProperty/>}/>
          <Route exact path="/admin" element={<AdminPanel/>}/>
          <Route exact path="/addproperty" element={<Addproperty/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
