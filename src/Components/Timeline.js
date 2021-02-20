import React from 'react'

import Years from './Years'

import './Timeline.css'

const Timeline = () => {
  return (
    <div className="Timeline">
      <Years
        from={2015}
        to={2020}
      />
    </div>
  )
}

export default Timeline
