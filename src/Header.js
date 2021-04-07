import React from 'react'
import LinkUtils from './link-utils'
import { SocialIcon } from 'react-social-icons'

import './Header.css'

const Header = ({name, links, contacts}) => {
  return (
    <div className="Header">
      <h1 className="Name">{name}</h1>
      <div className="Links">
      {
        links.map((link, index) =>
          <SocialIcon
            key={index}
            url={link}
            bgColor="hsl(0, 0%, 0%)"
            fgColor="white"
            style={{
              height: 32,
              width: 32,
            }}
          />
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
