import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import ParticulesConfig from "../../../../config/ParticulesConfig";
import ParticulesConfig2 from "../../../../config/ParticlesCongig2";

import styles from "./ParticulesBackgroud";

const ParticulesBackgroud = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id={styles.tsparticles}
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticulesConfig2}
    ></Particles>
  );
};

export default ParticulesBackgroud;
