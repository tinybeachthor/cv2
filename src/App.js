import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Timeline from './Timeline/Timeline'

import data from './cv.json'

import './App.css'

function App() {
  const { name, links, contacts, education, experience } = data

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
      <Footer
      />
    </div>
  );
}

export default App;
