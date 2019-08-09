import React from "react"

import Index from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Index>
    <div className="404 container mt-5 p-3 bg-dark ">
    <SEO title="404: Not found" />
    <h1>Error 404</h1>
    <div className="container mt-5 p-3">
    <h2>Page Not Found</h2>
    <p>Seems you have navigated to a page that doesn't exist. If you feel you reached this page in error, please send me an email so I can get it fixed ASAP</p>
    <h3>Thomas Leon Highbaugh (thighbaugh@zoho.com)</h3>
    </div>
    </div>
    </Index>
)

export default NotFoundPage
