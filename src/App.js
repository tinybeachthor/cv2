import './App.css';

import Timeline from './Timeline/Timeline'

import {education, experience} from './cv.json'

function App() {
  return (
    <div className="App">
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
