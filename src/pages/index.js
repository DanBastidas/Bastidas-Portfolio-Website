import React from "react"
import { Link } from "gatsby"



import Image from "../components/image"
import SEO from "../components/seo"
import NavbarComp from "../components/navbar"

import JumbotronComp from "../components/jumbotron"
//import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import AboutMe from "../components/aboutme"

const IndexPage = () => ( 
  <Layout>
    <SEO title="Home" />
    <JumbotronComp></JumbotronComp>
    <AboutMe/>
  </Layout>
)

export default IndexPage
