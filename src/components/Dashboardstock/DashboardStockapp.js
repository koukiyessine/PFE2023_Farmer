import React from "react";
import { Space } from "antd";
import "./DashboardStockapp.css";
import FooterStock from "./FooterStock";
import HeaderStock from "./HeaderStock";
import PagecontentStock from "./PagecontentStock";
import SidemenuStock from "./SidemenuStock";

function DashboardStockapp(){
return(
<div className="App">
<HeaderStock/>
<Space className="SideMenuAndPageContent">
    <SidemenuStock/>
    <PagecontentStock/>
</Space>
<FooterStock/>
</div>
);
}

export default DashboardStockapp;