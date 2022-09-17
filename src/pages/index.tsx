import React from 'react';
import type { HeadFC } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import SplitContent from '../components/SplitContent';
import ContentManager from '../utils/ContentManager';
import '../scss/index.scss';

const contentManager = new ContentManager();

const IndexPage = () => {
  return (
    <>
      <Header />

      <Hero />

      <FeatureGrid
        features={contentManager.getFeatures()}
        title="Why SimpliTrack?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dignissim ultrices. Nam tincidunt sem a quam tincidunt pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
      />

      <SplitContent
        left={{
          content: <p>left</p>
        }}
        right={{
          content: <p>Right</p>
        }}
      />

      <Footer />
    </>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>SimpliTrack | All in one Client Management Solution</title>
