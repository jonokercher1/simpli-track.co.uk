import React, { FC } from 'react';

export interface IFeature {
  icon: string;
  title: string;
  description: string;
}

interface IFeatureGrid {
  title: string;
  description: string;
  features: IFeature[];
}

const FeatureGrid: FC<IFeatureGrid> = ({ title, description, features }) => (
  <section>
    <header>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>

    <main>
      {features.map((feature) => (
        <article>
          <p>{feature.icon}</p>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </main>
  </section>
);

export default FeatureGrid;