import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import 'stylesheets/application.scss';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pageName }) => {
  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Gatsby Site</title>
      </Helmet>
      <div className="wrapper" style={{backgroundColor: 'black', color: 'white'}}>
        <Header />
        <main style={{fontFamily: "Roboto Mono"}}>{ children }</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
};

export default Layout;
