import React, { FC } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import * as styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <Container>
      <Logo />
    </Container>

  </header>
);

export default Header;