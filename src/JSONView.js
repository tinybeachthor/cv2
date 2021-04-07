import React from 'react'
import ReactJson from 'react-json-view'

import cv from './cv.json'

const JSONView = () => {
  return (
    <ReactJson
      src={cv}
      name="cv"
      shouldCollapse={({name}) => name === "date"}
      style={{textAlign: "left"}}
      displayDataTypes={false}
      quotesOnKeys={false}
    />
  )
}

export default JSONView
