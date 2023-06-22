import * as React from "react"
import {Link} from "gatsby";

const IndexPage = () => {
  return (
      <>
        <h1 className="text-red-300">hello index</h1>
        <Link to="/contact">Contact</Link>
      </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
