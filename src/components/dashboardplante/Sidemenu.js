import React, { useEffect, usestate } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  EditFilled,
  DeleteFilled,
  DiffOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


function Sidemenu() {
 /* const  location=useLocation()
  const [selectedKeys,setSelectedKeys] = usestate('/')

  useEffect(() =>{
    const pathName = location.pathname
    setSelectedKeys(pathName)},
    [location.pathname])
    
  */
  const navigate = useNavigate();

  return (
    <div className="Sidemenu">
      <Menu
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
      //  selectedKeys={selectedKeys}
        items={[
          {
            label: "Dashbaord",
            key: "/",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Rapport",
            key: "/Rapport",
            icon: <BarChartOutlined />,
          },
          {
            label: "Orders",
            key: "/Orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/Customers",
            icon: <UserOutlined />,
          },
          {
            label: "Ajouterplante",
            key: "/Ajouterplante",
            icon: <EditFilled />,
          },
          {
            label: "Supprimerplante",
            key: "/Supprimerplante",
            icon: <DeleteFilled />,
          },
          {
            label: "Mise a jour plante",
            key: "/Miseajourplante",
            icon: <DiffOutlined />,
          },
        ]}
      />
    </div>
  );
}

export default Sidemenu;
