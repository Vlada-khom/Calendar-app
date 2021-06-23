import {Year} from './year.jsx';
import { Days } from './Days';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Year />
      <Days year={2021} month={6}/>
    </div>
  );
}

export default App;
