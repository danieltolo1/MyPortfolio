import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";

import styles from "./Skills.module.css";

const Skills = (skill) => {
  const [hold, setHold] = useState(false);

  function setHolder() {
    if (window.scrollY >= 20 || window.screen.width < 1300) {
      setHold(true);
    } else {
      if (window.screen.width >= 1300 && window.scrollY >= 20) {
        setHold(true);
      } else {
        setHold(false);
      }
    }
  }

  function setHolder1() {
    if (window.screen.width < 1300) {
      setHold(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setHolder);
    window.onload = setHolder1();
  }, []);

  return (
    <div id="skillpart" className={styles.contenido}>
      <h1 className={styles.subtitle}>{skill.skill.bigTitle} </h1>
      <div className={hold ? styles.contenidoCards : styles.cardHidden}>
        <Card className={styles.card}>
          <Icon
            className={styles.IconCard}
            inverted
            name="rocket"
            size="huge"
          />
          <Card.Content className={styles.Content} />
          <Card.Content className={styles.CardExtra} extra>
            <h1 className={styles.CardExtraTitle}>{skill.skill.title1}</h1>
            <p>{skill.skill.description1}</p>
          </Card.Content>
        </Card>
        <Card className={styles.card}>
          <Icon className={styles.IconCard} inverted name="idea" size="huge" />
          <Card.Content className={styles.Content} />
          <Card.Content className={styles.CardExtra} extra>
            <h1 className={styles.CardExtraTitle}>{skill.skill.title2}</h1>
            {skill.skill.description2}
          </Card.Content>
        </Card>
        <Card className={styles.card}>
          <Icon
            className={styles.IconCard}
            inverted
            name="trophy"
            size="huge"
          />
          <Card.Content className={styles.Content} />
          <Card.Content className={styles.CardExtra} extra>
            <h1 className={styles.CardExtraTitle}>{skill.skill.title3}</h1>
            {skill.skill.description3}
          </Card.Content>
        </Card>
        <Card className={styles.card}>
          <Icon
            className={styles.IconCard}
            inverted
            name="settings"
            size="huge"
          />
          <Card.Content className={styles.Content} />
          <Card.Content className={styles.CardExtra} extra>
            <h1 className={styles.CardExtraTitle}>{skill.skill.title4}</h1>
            {skill.skill.description4}
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
