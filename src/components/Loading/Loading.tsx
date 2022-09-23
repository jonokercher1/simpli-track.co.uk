import React, { FC } from 'react';
import * as styles from './Loading.module.scss';

const Loading: FC = () => (
  <div
    className={styles.spinner}
  />
);

export default Loading;