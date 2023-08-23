import Banner from "../pages/Components/Molecules/Banner/Banner";
import Skills from "../pages/Components/Organisms/Skills/Skills";
import MeandTech from "./Components/Organisms/MeandTech/MeandTech";
import Projects from "./Components/Organisms/Projects/Projects";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { banner, skills, aboutMe, projects } = props;

  const presentation = [
    banner.presentation,
    banner.presentation2,
    banner.button,
  ];
  //  const conSkills = [skills.bigTitle];

  return (
    <div className={styles.container}>
      <Banner
        presentation={presentation[0]}
        presentation2={presentation[1]}
        presentation3={presentation[2]}
      />
      <Skills skill={skills} />
      <MeandTech aboutMe={aboutMe} />
      <Projects projects={projects} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      banner: response.default.banner,
      skills: response.default.skills,
      aboutMe: response.default.aboutMe,
      projects: response.default.projects,
    },
  };
}
