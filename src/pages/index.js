import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
     <Link to="/contact/">Contact</Link>
    <h1>Hello!</h1>
    <p>This is pretty neat.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)