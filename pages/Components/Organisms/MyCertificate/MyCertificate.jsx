import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import styles from "./MyCertificate.module.css";

const MyCertificate = (certifications) => {
  const dataJs = certifications.certifications;

  const [hold, setHold] = useState(false);

  function setHolder6() {
    if (window.scrollY >= 1200 || window.screen.width < 738) {
      setHold(true);
    } else {
      if (window.screen.width >= 738 && window.scrollY >= 1200) {
        setHold(true);
      } else {
        setHold(false);
      }
    }
  }

  function setHolder7() {
    if (window.screen.width < 1500) {
      setHold(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setHolder6);
    window.onload = setHolder7();
  }, []);

  return (
    <div className={styles.bigContainer}>
      <div className={styles.title}>{dataJs[0].SuperTitle}</div>
      <div className={hold ? styles.containerCertificate : styles.cardHidden}>
        {dataJs.map((data) => (
          <Card
            href={data.link}
            className={styles.card}
            color="teal"
            image={data.imageCertificate}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCertificate;
