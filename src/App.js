import Metric from './components/Metric/Metric';
import Analytics from './components/Analytics/Analytics';
import Tab from './components/Tab/Tab';
import ProgressBar from './components/ProgressBar/ProgressBar';

import './App.css';


function App() {
  return (
    <div className="App">
      <h2>Main Metrics</h2>
       <Tab/>
      <Metric/>
      <ProgressBar/>
      <Analytics/>
    </div>
  );
}

export default App;
