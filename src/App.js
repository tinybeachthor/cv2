import './App.css';

import Timeline from './Components/Timeline'

import {education} from './cv.json'

function App() {
  return (
    <div className="App">
      <Timeline
        leftTitle="education"
        rightTitle="experience"
      />
    </div>
  );
}

export default App;
