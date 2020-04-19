/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Navbar from "react-bootstrap/Navbar"

import React from "react"



const NavbarComp = () => (

  <Navbar
    className="mb-3"
    sticky="top"
    variant="light"
    css={css`
      background-color: #ffffff;
    `}
  >
    <Navbar.Brand
      css={css`
        color: #fbfaf2;
      `}
    >
      db
    </Navbar.Brand>
  </Navbar>
)

export default NavbarComp
