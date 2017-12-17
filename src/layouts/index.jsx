import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

// require('bootstrap');
import './bootstrap.min.css';
import ReactNavbar from '../components/ReactNavbar'
import FluidJumbotron from "../components/FluidJumbotron";

const Header = () => <ReactNavbar />;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby + reactstrap Demo"
      meta={[
        { name: "description", content: "Gatsby + reactstrap Demo" },
        { name: "keywords", content: "Gatsby.js, reactstrap, Bootstrap 4" }
      ]}
    />
    <Header />
    <FluidJumbotron />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: "1.45rem"
      }}
    >
      {children()}
    </div>
    <div className="footer">
      <div className="float-left">
        <p>This is the layout footer...</p>
      </div>
      <div className="float-right">
        <p>Enjoy!</p>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
