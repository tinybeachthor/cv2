import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Links">
        <div>
          <span>Up-to-date version available online: </span>
          <a href={window.location.href}>{window.location.href}</a>
        </div>
        <div>
          <span>Template available (MIT License): </span>
          <a href="https://github.com/tinybeachthor/cv2">https://github.com/tinybeachthor/cv2</a>
        </div>
      </div>
      <div className="Buttons">
        <div>
          <Link to="/">
            default
          </Link>
          <Link to="/json">
            JSON
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
