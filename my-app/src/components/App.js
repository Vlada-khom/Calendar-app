import { Year } from './Year';
import './styles.css';
import {
  BrowserRouter as Switch, Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

export function App() {
  const history = createBrowserHistory();

  const handleYearChange = (newValue) => {
    history.push(`/year/${newValue}`);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/year/:yearNumber" render={(props) =>
          <Year year={Number(props.match.params.yearNumber)} onYearChange={handleYearChange}></Year>
        }/>
      </Switch>
    </div>
  );
}

export default App;