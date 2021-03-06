import React from 'react'

const Footer = ({ index }) => (
  <ul
    css={{
      position: 'fixed',
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      right: 0,
      bottom: 0,
      margin: 16,
      listStyleType: 'none',
      opacity: 0.75,
      li: {
        padding: 8
      },
      color: "white",
      a: {
          color: "white"
      },
    }}
  >
    <li>2019 Treasure JavaScript (<a href="https://github.com/voyagegroup/treasure-javascript/tree/master/slide">source</a>)</li>
  </ul>
)

export default Footer