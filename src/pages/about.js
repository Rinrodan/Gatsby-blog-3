import * as React from 'react'
import LayoutBlog from '../components/layoutBlog'

const AboutPage = () => {
  return (
    <LayoutBlog pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </LayoutBlog>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage