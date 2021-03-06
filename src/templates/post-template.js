import React from "react"
import Container from "react-bootstrap/Container"
import { PageLayout, PageTitle } from "../components"

import SEO from "../utils/seo"

export default ({ title, excerpt, html, subTitle }) => (
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center px-1" fluid>
      <PageTitle title={title} />
      {subTitle}
      <Container className="text-left">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Container>
  </PageLayout>
)
