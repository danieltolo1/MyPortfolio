import React, { useState } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import Link from "next/link";

import CarrouselModal from "../../Atoms/CarrouselModal/CarrouselModal";

import styles from "./ModalProject.module.css";
import "pure-react-carousel/dist/react-carousel.es.css";

const ModalProject = (props) => {
  const {
    name,
    link,
    imageModal1,
    imageModal2,
    imageModal3,
    btnModal,
    description,
    titleDescription,
    btnWebsite,
  } = props;
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="black" animated="fade">
          <Button.Content visible>{btnModal}</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content className={styles.content} image>
        {/* <Image size="big" src={image} centered /> */}
        <CarrouselModal
          imageModal1={imageModal1}
          imageModal2={imageModal2}
          imageModal3={imageModal3}
        />
        <Modal.Description>
          <Header>{titleDescription}</Header>
          <p>{description}</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className={styles.ActionModal}>
        <Link href={link}>
          <Button color="black" onClick={() => setOpen(false)} animated>
            <Button.Content visible>{btnWebsite}</Button.Content>
            <Button.Content hidden>
              <Icon name="github" />
            </Button.Content>
          </Button>
        </Link>
        <Link href={link}>
          <Button color="green" postive onClick={() => setOpen(false)} animated>
            <Button.Content icon="globe" visible>
              {btnWebsite}
            </Button.Content>
            <Button.Content hidden>
              <Icon name="globe" />
            </Button.Content>
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalProject;
