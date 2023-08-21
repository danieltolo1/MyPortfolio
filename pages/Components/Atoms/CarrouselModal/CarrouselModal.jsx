import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../CustomDotGroup/CustomDotGroup";

import styles from "./Carrousel.module.css";

const CarrouselModal = (props) => {
  const { imageModal2, imageModal3, imageModal1 } = props;

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={3}
    >
      <Slider className={styles.Slider}>
        <Slide tag="a" index={0}>
          <Image className={styles.ImageSlider} src={imageModal1} />
        </Slide>
        <Slide tag="a" index={1}>
          <Image className={styles.ImageSlider} src={imageModal2} />
        </Slide>
        <Slide tag="a" index={2}>
          <Image className={styles.ImageSlider} src={imageModal3} />
        </Slide>
      </Slider>

      <Divider />
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  );
};
export default CarrouselModal;
