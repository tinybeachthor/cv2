import React from 'react'
import ReactJson from 'react-json-view'

import Footer from './Footer'

import cv from './cv.json'

const JSONView = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '10px auto',
    }}>
      <ReactJson
        src={cv}
        name="cv"
        shouldCollapse={({name}) => name === "date"}
        style={{
          textAlign: "left",
          margin: '10px 0',
          padding: '0 35px',
        }}
        displayDataTypes={false}
        quotesOnKeys={false}
      />
      <Footer />
    </div>
  )
}

export default JSONView
