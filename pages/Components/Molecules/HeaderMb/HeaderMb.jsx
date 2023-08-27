import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, Sidebar, Icon } from "semantic-ui-react";
import { Link } from "react-scroll/modules";

import ImageLogo from "../.././../../img/LogoPequeno.png";
import ingles from "../../../../img/ingles.png";
import espanol from "../../../../img/espanol.png";

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
function HeaderMb(header) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(HamIcon);
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    router.push(router.pathname, router.pathname, {
      locale: name,
    });
  };
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
          <Image
            src={ImageLogo}
            className={styles.ImageLogo}
            alt="Image Logo Daniel"
          />
        </Menu.Item>
        <Link
          className={styles.HeaderClass}
          activeClass="active"
          to="aboutpart"
          spy={true}
          smooth={true}
          offset={-2500}
          duration={900}
        >
          <Menu.Item name={header.header.btnHOme} />
        </Link>
        <Link
          className={styles.HeaderClass}
          activeClass="active"
          to="aboutpart"
          spy={true}
          smooth={true}
          offset={-1100}
          duration={900}
        >
          <Menu.Item name={header.header.aboutMe} />
        </Link>
        <Link
          className={styles.HeaderClass}
          activeClass="active"
          to="aboutpart"
          spy={true}
          smooth={true}
          offset={-1900}
          duration={900}
        >
          <Menu.Item name={header.header.skills} />
        </Link>
        <Link
          className={styles.HeaderClass}
          activeClass="active"
          to="aboutpart"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <Menu.Item name={header.header.projects} position="right" />
        </Link>
        <Menu.Item name={header.header.contact} />
        <Menu.Item
          className={styles.flatLenguage}
          name="en"
          onClick={handleItemClick}
        >
          <Image
            className={styles.ImageFlat}
            src={ingles}
            alt="Picture of the author"
          />
          <p className={styles.pe}> {header.header.lenguage2}</p>
        </Menu.Item>
        <Menu.Item
          className={styles.flatLenguage}
          name="es"
          onClick={handleItemClick}
        >
          <Image
            className={styles.ImageFlat}
            src={espanol}
            alt="Picture of the author"
          />
          <p className={styles.pe}>{header.header.lenguage1}</p>
        </Menu.Item>
      </Sidebar>
    </>
  );
}

export default HeaderMb;
