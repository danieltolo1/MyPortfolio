import React from "react";
import { useEffect, useState } from "react";
import { Reveal } from "semantic-ui-react";
import Image from "next/image";

import styles from "./Graph.module.css";
import next from "../../../../img/next1.png";
import js from "../../../../img/js2.png";
import html from "../../../../img/html4.png";
import css from "../../../../img/css4.png";
import react from "../../../../img/react.png";
import node from "../../../../img/nodejs.png";
import wordpress from "../../../../img/Wordpress.png";
import photoshop from "../../../../img/photoshop.png";
import strapi from "../../../../img/strapi.png";
import Angular from "../../../../img/anglular.png";
import unity from "../../../../img/unity.png";
import gamem from "../../../../img/gamemaker.png";
import novecinpor from "../../../../img/95por.png";
import ochencinpor from "../../../../img/85por.png";
import setentadospor from "../../../../img/72por.png";
import setentaochopor from "../../../../img/78por.png";
import setentapor from "../../../../img/70por.png";
import sesentacuatropor from "../../../../img/64por.png";
import cincuentapor from "../../../../img/50por.png";

const Graph = () => {
  const [hold3, setHold3] = useState(false);

  function setHolder3() {
    if (window.scrollY >= 200 || window.screen.width < 738) {
      setHold3(true);
    } else {
      if (window.screen.width >= 738 && window.scrollY >= 200) {
        setHold3(true);
      } else {
        setHold3(false);
      }
    }
  }

  function setHolder4() {
    if (window.screen.width < 1300) {
      setHold3(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setHolder3);
    window.onload = setHolder4();
  }, []);

  return (
    <div className={hold3 ? styles.cuadro1 : styles.cuadro1Hidden}>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={next} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={setentadospor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={js} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={ochencinpor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={html} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={novecinpor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={css} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={ochencinpor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={node} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={sesentacuatropor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={react} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={setentaochopor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={wordpress} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={setentapor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={photoshop} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={ochencinpor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={strapi} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={sesentacuatropor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={Angular} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={cincuentapor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={unity} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={cincuentapor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div className={styles.cuadro}>
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image className={styles.icon} src={gamem} alt="icono" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              size="small"
              className={styles.icon}
              src={cincuentapor}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
    </div>
  );
};

export default Graph;
