import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  UserOutlined,
  EditFilled,
  DeleteFilled,
  DiffOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

function SidemenuStock() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="Sidemenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={selectedKeys}
        items={[
          {
            label: "DashboardStock",
            key: "/",
            icon: <AppstoreOutlined />,
          },
          {
            label: "RapportStock",
            key: "/RapportStock",
            icon: <BarChartOutlined />,
          },

          {
            label: "CustomersStock",
            key: "/CustomersStock",
            icon: <UserOutlined />,
          },
          {
            label: "AjouterStock",
            key: "/AjouterStock",
            icon: <EditFilled />,
          },
          {
            label: "SupprimerStock",
            key: "/SupprimerStock",
            icon: <DeleteFilled />,
          },
          {
            label: "Mise a jour Stock",
            key: "/MiseajourStock",
            icon: <DiffOutlined />,
          },
        ]}
      />
    </div>
  );
}

export default SidemenuStock;
