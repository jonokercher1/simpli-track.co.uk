import React from 'react';
import type { HeadFC } from 'gatsby';
import Form from '../components/Form'
import Footer from '../components/Footer';
import Container from '../components/Container';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './index.module.scss';
import '../scss/index.scss';
import { Toaster } from 'react-hot-toast';

const IndexPage = () => {
  return (
    <>
      <Toaster />

      <div className={styles.page}>
        <section className={styles.main}>
          <main className={styles.contentContainer}>
            <h3 className={styles.subHeading}>Get early access to</h3>
            <h1 className={styles.heading}>The future of online coaching</h1>
            <Form />
          </main>

          <StaticImage
            src="../assets/images/hero.svg"
            alt=""
            placeholder="blurred"
            className={styles.image}
          />
        </section>

        <Footer />
      </div>
    </>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>SimpliTrack | All in one Client Management Solution</title>
