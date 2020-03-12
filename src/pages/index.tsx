import React from 'react';
import Head from 'next/head';
import {Root} from '../components/Root';
import {HeroPanel} from '../components/Home/HeroPanel';

const description = 'An 🇦🇺 Software Engineer passionate about...';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>James Newell &mdash; {description}</title>
        <meta name="description" content={description} />
      </Head>
      <Root>
        <HeroPanel />
      </Root>
    </>
  );
};

export default HomePage;
