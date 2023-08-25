import React from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import { Menu, Segment } from "semantic-ui-react";
import Image from "next/image";
import Link from "next/link";

import espanol from "../../../../img/espanol.png";
import LogoNormal from "../../../../img/LogoPequeno.png";
import ingles from "../../../../img/ingles.png";
import styles from "./HeaderLg.module.css";

export default function Header(header) {
  const ref = useRef(null);
  const router = useRouter();
  const handleItemClick = (e, { name }) => {
    router.push(router.pathname, router.pathname, {
      locale: name,
    });
  };
  const handleAboutClick = () => {
    ref.current?.scrollIntoView({ behavior: "smoot" });
    hijoAPadre(ref);
  };

  return (
    <>
      <Segment inverted attached size="mini">
        <Menu inverted secondary>
          <Menu.Item
            as="a"
            name="index"
            // active={activeItem === "index"}
            // onClick={handleItemClick}
          >
            <Image
              className={styles.ImageLogo}
              src={LogoNormal}
              alt="Picture of the author"
            />
          </Menu.Item>

          <Menu.Item
            as="a"
            name={header.header.aboutMe}
            onClick={handleAboutClick}
          />

          <Menu.Item
            as="a"
            name={header.header.projects}
            // active={activeItem === "contact"}
            // onClick={handleItemClick}
          />
          <Menu.Item
            as="a"
            name={header.header.skills}
            // active={activeItem === "Skills"}
            // onClick={handleItemClick}
          />
          <Menu.Item
            as="a"
            name={header.header.contact}
            // active={activeItem === "contact"}
            // onClick={handleItemClick}
          />

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
