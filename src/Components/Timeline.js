import React from 'react'

import Years from './Years'

import './Timeline.css'

const Timeline = ({leftTitle, left, rightTitle, right}) => {
  return (
    <div className="Timeline">
      <h1 className="LeftTitle">{leftTitle}</h1>
      <div className="Left">
      </div>
      <Years from={2015} to={2020} />
      <h1 className="RightTitle">{rightTitle}</h1>
      <div className="Right">
      </div>
    </div>
  )
}

export default Timeline
