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
    <PostGroup category="trabalho"/>
    <PostGroup category="redacao"/>
    <PostGroup category="resumo"/>
  </Layout>
)

export default HomePage
