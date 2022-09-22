import React, { FC } from 'react';
import Container from '../Container';
import * as styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer>
    <Container className={styles.footerContainer}>
      <p className={styles.footerText}>Simpli Track {new Date().getFullYear()}</p>
    </Container>
  </footer>
);

export default Footer;