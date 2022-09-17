import React, { FC, ReactNode } from 'react';
import * as styles from './Container.module.scss';

interface IContainer {
  children: ReactNode;
  className?: string
}

const Container: FC<IContainer> = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>
    {children}
  </div>
);

export default Container;