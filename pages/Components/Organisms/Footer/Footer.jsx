import React from "react";
import { Icon } from "semantic-ui-react";
import FormFooter from "../../Molecules/FormFooter/FormFooter";

import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = (contact) => {
  const data = contact.contact;

  return (
    <>
      <div className={styles.ContainerPal}>
        <h1 className={styles.title}>{data.title}</h1>
        <hr className={styles.hrTitle} />
        <FormFooter contact={data} />
        <Icon
          color="teal"
          className={styles.IconCenter}
          name="toggle up"
          size="huge"
        />
      </div>

      <footer className={styles.footer}>
        <div className={styles.socialMedia}>
          <Icon
            className={styles.socialMediaIcon}
            name="linkedin"
            size="huge"
          />
          <Icon
            className={styles.socialMediaIcon}
            name="whatsapp square"
            size="huge"
          />
          <Icon
            className={styles.socialMediaIcon}
            name="whatsapp square"
            size="huge"
          />
          <Icon
            className={styles.socialMediaIcon}
            name="github square"
            size="huge"
          />
        </div>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" Daniel Torres Londoño "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
