import React from 'react'

import Header from './Header'
import Timeline from './Timeline/Timeline'

import {name, links, contacts, education, experience} from './cv.json'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header
        name={name}
        links={links}
        contacts={contacts}
      />
      <Timeline
        leftTitle="education"
        left={education}
        rightTitle="experience"
        right={experience}
      />
    </div>
  );
}

export default App;
