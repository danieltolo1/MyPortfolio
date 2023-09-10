import React from "react";
import { Icon } from "semantic-ui-react";
import FormFooter from "../../Molecules/FormFooter/FormFooter";
import IconSocialMedia from "../../Atoms/IconSocialMedia/IconSocialMedia";

import { Link } from "react-scroll/modules";

import styles from "./Footer.module.css";

const Footer = (contact) => {
  const data = contact.contact;

  return (
    <>
      <div className={styles.ContainerPal}>
        <h1 className={styles.title}>{data.title}</h1>
        <hr className={styles.hrTitle} />
        <FormFooter contact={data} />
        <Link
          activeClass="active"
          to="aboutpart"
          spy={true}
          smooth={true}
          offset={-2500}
          duration={2500}
        >
          <Icon
            color="teal"
            className={styles.IconCenter}
            name="toggle up"
            size="huge"
          />
        </Link>
      </div>

      <footer className={styles.footer}>
        <IconSocialMedia />
        <div className={styles.end}>
          - Powered by{" Daniel Torres Londoño 2023 -"}
        </div>
      </footer>
    </>
  );
};

export default Footer;
