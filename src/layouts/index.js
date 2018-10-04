import React from 'react';
import Helmet from 'react-helmet';

import '../sass/main.scss';

const Layout = ({children}) => [
  <Helmet key="app-head">
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
  </Helmet>,
  <div key="app-content">
    {children}
  </div>
];

export default Layout;