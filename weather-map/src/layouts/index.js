import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import './theme.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Weather App"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'react, gatsby' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
