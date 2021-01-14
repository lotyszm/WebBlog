import React from "react"

import styled from "styled-components"

import theme from "../../utils/theme"

const ReactArticleOverlay = styled.svg`
  text-transform: uppercase;
  color: ${theme.secondary};
  opacity: 0.7;
  font-size: 14px;
`

export default function (): React.ReactElement {
  return (
    <ReactArticleOverlay
      xmlns="http://www.w3.org/2000/svg"
      width="940.103"
      height="1009.782"
      viewBox="0 0 940.103 1009.782"
    >
      <g transform="translate(-15937 -6004)">
        <path
          d="M501.951,30h0L31.9,197.624l71.694,621.521,398.357,220.637h0L900.309,819.144,972,197.624Z"
          transform="translate(15905.1 5974)"
          fill="rgba(221,0,49,0.04)"
        />
        <path
          d="M125,30V653.035h0v386.746h0L523.357,819.144l71.694-621.521Z"
          transform="translate(16282.051 5974)"
          fill="rgba(221,0,49,0.04)"
        />
        <path
          d="M360.645,52.1,66.8,710.983H176.361l59.072-147.428H484.848L543.92,710.983H653.481L360.645,52.1Zm85.831,420.574H274.814l85.831-206.5Z"
          transform="translate(16046.406 6063.481)"
          fill="rgba(221,0,49,0.04)"
        />
      </g>
    </ReactArticleOverlay>
  )
}
