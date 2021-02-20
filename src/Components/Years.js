import React from 'react'

import './Years.css'

const Years = ({ from, to }) => {
  const years = [...Array(to - from).keys()]
    .map(i => to - i - 1)

  return (
    <div className="Years">
    {
      years.map((year, index) => (
        <div className="Year" key={index}>
          <div className="Bar"></div>
          <div className="Label">
            { year }
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Years
