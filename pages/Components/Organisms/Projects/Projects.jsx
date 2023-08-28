import React, { useState, useEffect } from "react";
import { Card, Icon, Reveal, Button, Image } from "semantic-ui-react";

import ModalProject from "../../Molecules/ModalProject/ModalProject";

import styles from "./Project.module.css";

const Extra = (props) => {
  const {
    names,
    link,
    ima1,
    ima2,
    ima3,
    btnModal,
    description,
    titleDescription,
    btnWebsite,
  } = props;

  return (
    <>
      <ModalProject
        name={names}
        link={link}
        imageModal1={ima1}
        imageModal2={ima2}
        imageModal3={ima3}
        btnModal={btnModal}
        description={description}
        titleDescription={titleDescription}
        btnWebsite={btnWebsite}
      />
    </>
  );
};

const ImageNat = (props) => {
  const { ima1, ima2 } = props;

  return (
    <Reveal className={styles.reveal} animated="fade">
      <Reveal.Content className={styles.img} visible>
        <Image
          className={styles.img}
          src={ima1}
          width={250}
          height={250}
          alt="imagen1"
        />
      </Reveal.Content>
      <Reveal.Content className={styles.img} hidden>
        <Image
          className={styles.img}
          src={ima2}
          width={250}
          height={250}
          alt="imagen2"
        />
      </Reveal.Content>
    </Reveal>
  );
};

const Projects = (projects) => {
  const dataJs = projects.projects;

  const [hold, setHold] = useState(false);

  function setHolder4() {
    if (window.scrollY >= 900 || window.screen.width < 738) {
      setHold(true);
    } else {
      if (window.screen.width >= 738 && window.scrollY >= 900) {
        setHold(true);
      } else {
        setHold(false);
      }
    }
  }

  function setHolder5() {
    if (window.screen.width < 1300) {
      setHold(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setHolder4);
    window.onload = setHolder5();
  }, []);

  return (
    <div id="aboutpart" className={styles.container}>
      <h1 className={styles.Title}>{dataJs[0].SuperTitle}</h1>
      <div className={hold ? styles.gallery : styles.cardHidden}>
        <>
          {dataJs.map((project) => (
            <Card
              className={styles.card}
              image={<ImageNat ima1={project.image1} ima2={project.image2} />}
              header={project.title}
              meta={project.subTitle}
              description={""}
              extra={
                <Extra
                  names={project.title}
                  link={project.LinkWebpage}
                  ima1={project.imgSlider1}
                  ima2={project.imgSlider2}
                  ima3={project.imgSlider3}
                  btnModal={project.buttonModal}
                  description={project.descriptionCard}
                  titleDescription={project.subtitleModal}
                  btnWebsite={project.buttonWebsite}
                />
              }
              key={project.id}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default Projects;
