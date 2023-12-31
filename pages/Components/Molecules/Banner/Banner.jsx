import React from "react";
import { Button, Segment } from "semantic-ui-react";
import ParticulesBackgroud from "../../Atoms/particulesBackgroud/ParticulesBackgroud";

import styles from "./Banner.module.css";

const Banner = (presentation) => {
  return (
    <div className={styles.prueba}>
      <ParticulesBackgroud />
      <div className={styles.tituloBannner}>
        {presentation.presentation}
        <strong className={styles.nombre}> Daniel Torres Londoño</strong>,
        <br></br>
      </div>
      <div className={styles.tituloBannner2}>{presentation.presentation2}</div>
      <Segment className={styles.SegmentDown} inverted>
        <Button className={styles.ButtonDown} inverted color="green">
          {presentation.presentation3}
        </Button>
      </Segment>
    </div>
  );
};

export default Banner;
