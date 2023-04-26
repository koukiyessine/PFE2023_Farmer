import React from "react";
import "./Style.css"


import {Route, Routes} from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Service from "../routes/Service";
import Contact from "../routes/Contact";
//import Signup from "../routes/Signup";
import Authentificationstock from "../gestionstock/Authentificationstock";
import Authentificationplante from "../gestionplante/Authentificationplante";
import Rapportplante from "../gestionplante/Rapportplante";
import Rapportstock from "../gestionstock/Rapportstock";
// import Dashboardapp from "./dashboardplante/Dashboardapp";
//import DashboardStockapp from "./Dashboardstock/DashboardStockapp";
 /*
          <Route path="/DashboardStockapp"         element={<DashboardStockapp/>}/> 
         <Route path="/Dashboardapp"              element={<Dashboardapp/>}/>
<Route path="/Dashboardapp"              element={<Dashboardapp/>}/>
 <Route path="/DashboardStockapp"         element={<DashboardStockapp/>}/>
*/


function Test() {

  return (
   
    <div className="App">
       <Routes>
         <Route path="/"                          element={<Home/>}/>
         <Route path="/About"                     element={<About/>}/>
         <Route path="/Service"                   element={<Service/>}/>
         <Route path="/Contact"                   element={<Contact/>}/> 
         <Route path="/Authentificationstock"     element={<Authentificationstock/>}/> 
         <Route path="/Authentificationplante"    element={<Authentificationplante/>}/> 
         <Route path="/Rapportplante"             element={<Rapportplante/>}/> 
         <Route path="/Rapportstock"              element={<Rapportstock/>}/> 
         <Route path="/sign-up"                   element={<Contact/>}/> 

       </Routes>
  </div>
  );
}

export default Test;
