import React from 'react'
import LinkUtils from './link-utils'

import './Header.css'

const Header = ({name, links, contacts}) => {
  return (
    <div className="Header">
      <h1 className="Name">{name}</h1>
      <div className="Links">
      {
        links.map((link, index) =>
          <div key={index}>
            <a href={link}>{link}</a>
          </div>
        )
      }
      </div>
      <ul className="Contacts">
      {
        contacts.map((contact, index) =>
          <li key={index}>
            <a href={LinkUtils.formatLink(contact)}>{contact}</a>
          </li>
        )
      }
      </ul>
    </div>
  )
}

export default Header
