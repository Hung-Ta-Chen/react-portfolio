import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import {SITE_URL} from '../../data/data';
import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content={description} name="description" />
      <link href={SITE_URL} key="canonical" rel="canonical" />

      <link href="/favicon.ico" rel="icon" sizes="any" />
      <link href="/site.webmanifest" rel="manifest" />

      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={SITE_URL} property="og:url" />
      <meta content="website" property="og:type" />

      <meta content="summary" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
    </Head>
    {children}
  </>
));

Page.displayName = 'Page';
export default Page;
