import React from "react"
import { Link } from "gatsby"


import Image from "../components/image"
import SEO from "../components/seo"
import NavbarComp from "../components/navbar"

import JumbotronComp from "../components/jumbotron"
import MainCards from "../components/mainCards"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <JumbotronComp></JumbotronComp>
    <MainCards />
  </Layout>
)

export default IndexPage
