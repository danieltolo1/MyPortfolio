import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, Segment } from "semantic-ui-react";
import Image from "next/image";

import espanol from "../../../../img/espanol.png";
import LogoNormal from "../../../../img/LogoPequeno.png";
import ingles from "../../../../img/ingles.png";
import styles from "./HeaderLg.module.css";

export default function Header() {
  const router = useRouter();
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setactiveItem(name);
    console.log(name);
    router.push(router.pathname, router.pathname, {
      locale: name,
    });
  };

  return (
    <>
      <Segment inverted attached size="mini">
        <Menu inverted secondary>
          <Menu.Item
            name="index"
            active={activeItem === "index"}
            onClick={handleItemClick}
          >
            <Image
              className={styles.ImageLogo}
              src={LogoNormal}
              alt="Picture of the author"
            />
          </Menu.Item>
          <Menu.Item
            name={activeItem === "es" ? "Acerca de Mi" : "About Me"}
            // active={activeItem === "es" ? "Inicio" : "Home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name={activeItem === "es" ? "Proyectos" : "Proyects"}
            // active={activeItem === "contact"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name={activeItem === "es" ? "Habilidades" : "Skills"}
            // active={activeItem === "Skills"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name={activeItem === "es" ? "contacto" : "contact"}
            // active={activeItem === "contact"}
            onClick={handleItemClick}
          />

          <Menu.Item
            name="en"
            // active={activeItem === "en"}
            onClick={handleItemClick}
            position="right"
          />
          <Image
            className={styles.ImageFlat}
            src={ingles}
            alt="Picture of the author"
          />

          <Menu.Item
            name="es"
            // active={activeItem === "es"}
            onClick={handleItemClick}
          />
          <Image
            className={styles.ImageFlat}
            src={espanol}
            alt="Picture of the author"
          />
          {/* section */}
        </Menu>
      </Segment>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../../../../lang/${locale}.json`);
  console.log("preba", response.default.header);
  return {
    props: {
      header: response.default.header,
    },
  };
}
