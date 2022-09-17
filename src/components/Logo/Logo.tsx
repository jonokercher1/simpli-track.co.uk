import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Logo.module.scss';

const Logo: FC = () => (
  <StaticImage
    src="../../assets/temp-logo.png"
    alt="Simpli Track"
    className={styles.logo}
    placeholder="blurred"
  />
);

export default Logo;