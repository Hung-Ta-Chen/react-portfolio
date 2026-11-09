import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Experience from '../components/Sections/Experience';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Skills from '../components/Sections/Skills';
import {homePageMeta} from '../data/data';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </Page>
  );
});

export default Home;
