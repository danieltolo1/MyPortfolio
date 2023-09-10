import React from "react";
import { useEffect, useState } from "react";
import { Reveal } from "semantic-ui-react";
import Image from "next/image";

import styles from "./Graph.module.css";
import next from "../../../../img/next1.png";
import js from "../../../../img/js2.png";
import js85 from "../../../../img/85porJvs.png";
import html from "../../../../img/html4.png";
import html95 from "../../../../img/95porhtml.png";
import css from "../../../../img/css4.png";
import css85 from "../../../../img/85porCSS.png";
import react from "../../../../img/react.png";
import React78 from "../../../../img/78porREACT.png";
import node from "../../../../img/nodejs.png";
import node64 from "../../../../img/64porNJ.png";
import wordpress from "../../../../img/Wordpress.png";
import wordpress70 from "../../../../img/70porWORD.png";
import photoshop from "../../../../img/photoshop.png";
import ps85 from "../../../../img/85porPS.png";
import strapi from "../../../../img/strapi.png";
import strapi64 from "../../../../img/64porSTRAPI.png";
import Angular from "../../../../img/anglular.png";
import angular50 from "../../../../img/50porANGULAR.png";
import unity from "../../../../img/unity.png";
import unity50 from "../../../../img/50porUNITY.png";
import gamem from "../../../../img/gamemaker.png";
import gamem50 from "../../../../img/50porGMS.png";
import setentadospor from "../../../../img/72por.png";

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
              src={js85}
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
              src={html95}
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
              src={css85}
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
              src={node64}
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
              src={React78}
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
              src={wordpress70}
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
              src={ps85}
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
              src={strapi64}
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
              src={angular50}
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
              src={unity50}
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
              src={gamem50}
              alt="porcent"
            />
          </Reveal.Content>
        </Reveal>
      </div>
    </div>
  );
};

export default Graph;
