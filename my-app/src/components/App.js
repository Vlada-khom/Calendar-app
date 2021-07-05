import { Redirect, Route, Switch} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {useContext} from 'react';

import { Year } from './Year';
import { MonthPage } from './MonthPage';
import { DayPage } from './DayPage';
import './styles.css';
import {NotesContext} from '../tools/notesProvider';

export function App() {
  const history = useHistory();

  const [notes, setNotes] = useState({});

  useEffect(() => {
    console.log('Load from LocalStarage'); 
    setNotes({
      '2021-08-01': 'Hello',
    });
  }, []);


  const handleYearChange = (newValue) => {
    history.push(`/year/${newValue}`);
  }

  return (
    <NotesContext.Provider value={notes}>
      <div className="App">
        <Switch>

          <Route path="/year/:year/month/:month/day/:day" render={({match}) =>(
            <DayPage {...match.params}/>
            )
          }/>

          <Route path="/year/:yearNumber/month/:monthNumber" render={({match}) =>(
            <MonthPage year={Number(match.params.yearNumber)} month={Number(match.params.monthNumber)}/>
            )
          }/>

          <Route path="/year/:yearNumber" render={(props) =>(
            <Year year={Number(props.match.params.yearNumber)} onYearChange={handleYearChange}></Year>
            )
          }/>

          <Route path="/today">
          <Redirect to={`/year/${new Date().getFullYear()}/month/${new Date().getMonth() + 1}/day/${new Date().getDate()}`}></Redirect>
          </Route>
          
          <Route path="/">
          <Redirect to={`/year/${new Date().getFullYear()}`}></Redirect>
          </Route>


        </Switch>
      </div>
    </NotesContext.Provider>
  );
}

export default App;