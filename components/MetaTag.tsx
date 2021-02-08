import React from 'react'

const MetaTag = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Finance Application"/>
      <meta name="keywords" content="Finance,Application,Accounting"/>
      <meta name="author" content="Evodeus"/>
    </>
  )
}

export default MetaTag;