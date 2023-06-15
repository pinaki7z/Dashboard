import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Pre Sales",
            key: "/inventory",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Finance",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customer Service",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Report",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Complaint",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Import",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Master",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Setting",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "User",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Operation",
            key: "/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
