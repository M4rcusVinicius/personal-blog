import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/Home/About" 
import Language from "../components/Home/Language" 
import NewPost from "../components/Home/NewPost"
import PostGroup from "../components/Home/PostGroup"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Language />
    <NewPost />
    <PostGroup category="robotica"/>
    <PostGroup category="programacao"/>
    <PostGroup category="projeto"/>
  </Layout>
)

export default HomePage
