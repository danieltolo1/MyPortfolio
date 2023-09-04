import { useState } from "react";

import Banner from "../pages/Components/Molecules/Banner/Banner";
import Skills from "../pages/Components/Organisms/Skills/Skills";
import MeandTech from "./Components/Organisms/MeandTech/MeandTech";
import Projects from "./Components/Organisms/Projects/Projects";
import MyCertificate from "./Components/Organisms/MyCertificate/MyCertificate";
import Footer from "./Components/Organisms/Footer/Footer";

import styles from "../styles/Home.module.css";
import Header from "./Components/Organisms/Header/Header";

export default function Home(props) {
  const { banner, skills, aboutMe, projects, header, certifications, contact } =
    props;

  const presentation = [
    banner.presentation,
    banner.presentation2,
    banner.button,
  ];

  const [datos, estableceDatos] = useState("");

  const hijoAPadre = () => {};

  return (
    <>
      <Header header={header} hijoAPadre={hijoAPadre} />
      <div className={styles.container}>
        <Banner
          presentation={presentation[0]}
          presentation2={presentation[1]}
          presentation3={presentation[2]}
        />
        <Skills skill={skills} />
        <MeandTech aboutMe={aboutMe} />
        <Projects projects={projects} />
        <MyCertificate certifications={certifications} />
        <Footer contact={contact} />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      header: response.default.header,
      banner: response.default.banner,
      skills: response.default.skills,
      aboutMe: response.default.aboutMe,
      projects: response.default.projects,
      certifications: response.default.certifications,
      contact: response.default.contact,
    },
  };
}
