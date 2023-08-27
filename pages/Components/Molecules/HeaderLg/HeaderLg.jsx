import React from "react";

import { useRouter } from "next/router";
import { Menu, Segment } from "semantic-ui-react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

import espanol from "../../../../img/espanol.png";
import LogoNormal from "../../../../img/LogoPequeno.png";
import ingles from "../../../../img/ingles.png";
import styles from "./HeaderLg.module.css";

export default function Header(header) {
  const router = useRouter();
  const handleItemClick = (e, { name }) => {
    router.push(router.pathname, router.pathname, {
      locale: name,
    });
  };

  return (
    <>
      <Segment inverted attached size="mini">
        <Menu inverted secondary>
          <Menu.Item name="index">
            <Image
              className={styles.ImageLogo}
              src={LogoNormal}
              alt="My Logo Daniel Torres "
            />
          </Menu.Item>
          <Link
            className={styles.HeaderClass}
            activeClass="active"
            to="aboutpart"
            spy={true}
            smooth={true}
            offset={50}
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
            offset={800}
            duration={900}
          >
            <Menu.Item name={header.header.projects} />
          </Link>
          <Link
            className={styles.HeaderClass}
            activeClass="active"
            to="skillpart"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            <Menu.Item name={header.header.skills} />
          </Link>
          <Link
            className={styles.HeaderClass}
            activeClass="active"
            to="skillpart"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            <Menu.Item name={header.header.contact} />
          </Link>

          <Menu.Item name="en" onClick={handleItemClick} position="right">
            {header.header.lenguage2}
            <Image
              className={styles.ImageFlat}
              src={ingles}
              alt="Picture of the author"
            />
          </Menu.Item>

          <Menu.Item name="es" onClick={handleItemClick}>
            {header.header.lenguage1}
            <Image
              className={styles.ImageFlat}
              src={espanol}
              alt="Picture of the author"
            />
          </Menu.Item>

          {/* section */}
        </Menu>
      </Segment>
    </>
  );
}
