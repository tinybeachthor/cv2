import React from 'react'
import DateUtils from './date-utils'

import Years from './Years'

import './Timeline.css'

const randomHues = (count, start = 0, step = 60) =>
  [...Array(count).keys()]
    .map(i => Math.floor(start + step * i) % 360)

const Timeline = ({leftTitle, left, rightTitle, right}) => {
  let from =
    DateUtils.roundToYear(
    DateUtils.earliestDate(
      [...left, ...right].map(x => x.date.from)
    ))
  const to = new Date()

  const colors = randomHues(left.length + right.length, 80, 45)
  const leftColors = colors.slice(0, left.length)
  const rightColors = colors.slice(left.length, left.length + right.length)

  const renderBars = (data, colors) =>
    data.map(({date}, index) => {
      if (date === null)
        return null;

      switch (typeof date) {
        case 'object': return (
          <div
            key={index}
            className="Range"
            style={{
              bottom: DateUtils.datePointInRange(from, to, date.from) + '%',
              height: DateUtils.datesToPercentage(from, to, date.from, date.to) + '%',
              backgroundColor: `hsl(${colors[index]}, 55%, 80%)`
            }}/>
        );
        case 'string': return (
          <div
            key={index}
            className="Point"
            style={{
              bottom: DateUtils.datePointInRange(from, to, date) + '%',
              backgroundColor: `hsl(${colors[index]}, 55%, 80%)`
            }}/>
        );
        default:
          return null;
      }
    })
  const renderItems = (data, colors) =>
    data.map(({title, subtitle, text, link}, index) =>
      <div
        key={index}
        style={{
          borderTop: `solid 10px hsl(${colors[index]}, 55%, 80%)`
        }}>
        <a href={link}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <ul>
            {(text || []).map((subitem, index) =>
            <li
              key={index}>
              {subitem}
            </li>
            )}
          </ul>
        </a>
      </div>
    )

  return (
    <div className="Timeline">

      <Years from={from} to={to} name="LeftYears" />
      <Years from={from} to={to} name="RightYears"/>

      <h1 className="LeftTitle">{leftTitle}</h1>
      <div className="Left">
        <div className="Bars">
          {renderBars(left, leftColors)}
        </div>
        <div className="Items">
          {renderItems(left, leftColors)}
        </div>
      </div>

      <h1 className="RightTitle">{rightTitle}</h1>
      <div className="Right">
        <div className="Bars">
          {renderBars(right, rightColors)}
        </div>
        <div className="Items">
          {renderItems(right, rightColors)}
        </div>
      </div>

    </div>
  )
}

export default Timeline
