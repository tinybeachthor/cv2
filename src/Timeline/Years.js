import React from 'react'
import DateUtils from './date-utils'

import './Years.css'

const Years = ({ from, to, name }) => {
  const fromYear = from.getFullYear()
  const toYear = to.getFullYear()

  const years = [...Array(toYear - fromYear).keys()].map(i => toYear - i - 1)

  return (
    <div className="Years" style={{
      gridArea: name,
    }}>
      <div className="Year" style={{
        flex: DateUtils.yearFraction(to)
      }}>
        <div className="Bar"></div>
        <div className="Label">
          { to.getFullYear() }
        </div>
      </div>
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
