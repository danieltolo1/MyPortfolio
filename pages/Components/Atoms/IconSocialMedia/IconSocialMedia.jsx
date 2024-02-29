import React from "react";
import { Icon } from "semantic-ui-react";
import Link from "next/link";

import styles from "./IconSocialMeia.module.css";

const IconSocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <Link
        href="https://www.linkedin.com/in/daniel-torres-londono/"
        target="_blank"
      >
        <Icon className={styles.socialMediaIcon} name="linkedin" size="huge" />
      </Link>
      <Link href="https://wa.link/0g3uwp">
        <Icon
          className={styles.socialMediaIcon}
          name="whatsapp square"
          size="huge"
        />
      </Link>
      {/* <Link href="https://wa.link/rzp0cy" target="_blank">
        <Icon
          className={styles.socialMediaIcon}
          name="whatsapp square"
          size="huge"
        />
      </Link> */}
      <Link href="https://github.com/danieltolo1" target="_blank">
        <Icon
          className={styles.socialMediaIcon}
          name="github square"
          size="huge"
        />
      </Link>
    </div>
  );
};

export default IconSocialMedia;
