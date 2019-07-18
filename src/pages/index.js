import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Layout>
    <h1>Hello!</h1>
    <p>This is pretty neat.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  </div>
)