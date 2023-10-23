import React from "react";
import Image from "next/image";

import Graph from "../../Molecules/Graph/Graph";

import Me from "../../../../img/DanielT.png";
import styles from "./MeandTech.module.css";
import { useEffect, useState } from "react";

const MeandTech = (aboutMe) => {
  const [hold1, setHold1] = useState(false);

  function setHolder1() {
    if (window.scrollY >= 200 || window.screen.width < 738) {
      setHold1(true);
    } else {
      if (window.screen.width >= 738 && window.scrollY >= 200) {
        setHold1(true);
      } else {
        setHold1(false);
      }
    }
  }

  function setHolder2() {
    if (window.screen.width < 1300) {
      setHold1(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setHolder1);
    window.onload = setHolder2();
  }, []);

  return (
    <>
      <div className={styles.paragraph}>
        <div className={hold1 ? styles.images : styles.imageHidden}>
          <Image src={Me} alt="Me" className={styles.ImgMe} />
          <div className={styles.text}>
            <h3 className={styles.titleLogo}>{aboutMe.aboutMe.titleAbout}</h3>
            <p className={styles.titleLogo}>
              {aboutMe.aboutMe.descriptionAbout}
            </p>
          </div>
        </div>
        <div className={styles.graph}>
          <Graph />
          <div className={styles.button}></div>
        </div>
      </div>
    </>
  );
};

export default MeandTech;
