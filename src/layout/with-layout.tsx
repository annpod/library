import React from 'react';
import { Layout } from './layout';

export const withLayout = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
  );
};
