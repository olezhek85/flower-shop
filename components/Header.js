import Link from "next/link";
import { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

export default function Header() {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => setCurrent(e.key);

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>

      <Item
        key="register"
        icon={<UserAddOutlined />}
        style={{ float: "right" }}
      >
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} style={{ float: "right" }}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
    </Menu>
  );
}
