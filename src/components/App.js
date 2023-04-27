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
import DashboardStockapp from "./Dashboardstock/DashboardStockapp";
import Dashboardapp from "./dashboardplante/Dashboardapp";

/*
import RapportStock from "./Dashboardstock/Pages/RapportStock";
import SupprimerStock  from "./Dashboardstock/Pages/SupprimerStock";
import AjouterStock from "./Dashboardstock/Pages/AjouterStock";
import CustomersStock      from "./Dashboardstock/Pages/CustomersStock";
import MiseajourStock     from "./Dashboardstock/Pages/MiseajourStock";
import DashboardStockapp from "./Dashboardstock/DashboardStockapp";
<Route path="/DashboardStockapp"         element={<DashboardStockapp/>}/> 
<Route path="/DashboardStock"            element={<DashboardStockapp/>}/> 
<Route path="/RapportStock"              element={<RapportStock />} />
<Route path="/CustomersStock"            element={<CustomersStock />} />
<Route path="/AjouterStock"              element={<AjouterStock />} />
<Route path="/SupprimerStock"            element={<SupprimerStock />} />
<Route path="/MiseajourStock"            element={<MiseajourStock />} />
</Routes>
*/
 /*
          <Route path="/DashboardStockapp"         element={<DashboardStockapp/>}/> 
         <Route path="/Dashboardapp"              element={<Dashboardapp/>}/>
<Route path="/Dashboardapp"              element={<Dashboardapp/>}/>

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
         <Route path="/DashboardStockapp/*"         element={<DashboardStockapp/>}/>
         <Route path="/Dashboardapp/*"              element={<Dashboardapp/>}/>
         </Routes>
  </div>
  );
}

export default Test;
