import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "react-bootstrap/Container"

const NotFoundPage = () => (
  <Layout>
    <Container className="404 container mt-5 p-3 bg-dark">
    <SEO title="404: Not found" />
    <h1 className="text-center"> Error: 404</h1>
        <h2 className="text-center">Page Not Found</h2>
    <Container className="mt-2 p-3">
        <hr/>
        <h4 className="text-center">Seems you have navigated to a page that doesn't exist. </h4>
        <p className="text-center mt-3"> If you feel you reached this page in error or if an internal link led you here, then please send me an email so I can get it sorted out as soon as possible!</p>
        <h5 className="text-center mb-5"> Email me at: <span> Thomas Leon Highbaugh (thighbaugh@zoho.com)</span> </h5>
<hr className="mb-5"/>
    </Container>
    </Container>
    </Layout>
)

export default NotFoundPage
