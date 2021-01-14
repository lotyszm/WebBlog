import React, { useLayoutEffect } from "react"

import styled from "styled-components"

import theme from "../../utils/theme"
import Navbar from "../navbar/Navbar"

const Layout = styled.div`
  min-height: 100vh;
  background: ${theme.bg};
  display: flex;
  flex-flow: column;

  & > a:not(:last-of-type) {
    margin-right: 62px;
  }
`

const useStylesReset = () => {
  useLayoutEffect(() => {
    document.body.style.minHeight = "100vh"
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.fontFamily = "Roboto"
  }, [])
}

interface Props {
  children: React.ReactNode
}

export default function ({ children }: Props): React.ReactElement {
  useStylesReset()

  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  )
}
