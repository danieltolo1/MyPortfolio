import { useState } from "react";
import Image from "next/image";
import { Menu, Sidebar } from "semantic-ui-react";
import ImageLogo from "../.././../../img/LogoPequeno.png";

import styles from "./HeaderMb.module.css";

function Overlay() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.795)",
        position: "fixed",
        height: "110vh",
        width: "100%",
      }}
    />
  );
}

function HamIcon() {
  return <i className="big bars icon inverted" />;
}

function CloseIcon() {
  return <i className="big close red icon" />;
}
function HeaderMb({ renderLinks }) {
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(HamIcon);
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setactiveItem(name);
  const hideSidebar = () => {
    setIcon(HamIcon);
    setVisible(false);
  };
  const showSidebar = () => {
    setIcon(CloseIcon);
    setVisible(true);
  };
  const toggleSidebar = () => {
    visible ? hideSidebar() : showSidebar();
  };
  return (
    <>
      {visible && <Overlay />}
      <Menu inverted size="tiny" borderless attached>
        <Menu.Item>
          <Image src={ImageLogo} className={styles.ImageLogo} alt="" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={toggleSidebar}>{icon}</Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item>
          <Image src={ImageLogo} className={styles.ImageLogo} alt="" />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          position="right"
        />
        <Menu.Item
          name="sign_in"
          active={activeItem === "sign_in"}
          onClick={handleItemClick}
        />
      </Sidebar>
    </>
  );
}

export default HeaderMb;
