import React from 'react'
import DateUtils from './date-utils'

import Years from './Years'

import './Timeline.css'

const Timeline = ({leftTitle, left, rightTitle, right}) => {
  let from =
    DateUtils.roundToYear(
    DateUtils.earliestDate(
      [...left, ...right].map(x => x.date)
    ))
  const to = new Date()

  return (
    <div className="Timeline">

      <h1 className="LeftTitle">{leftTitle}</h1>
      <div className="Left">
        <div className="Bars">
        {
          left.map(({date}, index) =>
            <div
              key={index}
              style={{
                bottom: DateUtils.datePointInRange(from, to, date.from) + '%',
                height: DateUtils.datesToPercentage(from, to, date.from, date.to) + '%',
              }}/>
          )
        }
        </div>
        <div className="Items">
        {
        }
        </div>
      </div>

      <Years from={from} to={to} />

      <h1 className="RightTitle">{rightTitle}</h1>
      <div className="Right">
      </div>

    </div>
  )
}

export default Timeline
