import './App.css';
import Navigator from './components/Navigator';
import TitleViewer from './routes/TitleViewer';
import TreeView from './components/TreeView';
import MainViewport from './components/MainViewport';
import {createUseStyles} from 'react-jss';

import bg from './assets/bg.png';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams 
} from "react-router-dom";


const appStyles = createUseStyles({
  App: {
    textAlign: 'center',
    display: 'flex',
    fontFamily: '"Anomymous Pro" , monospace',
    backgroundImage: `url(${bg})`,
    height: '100%',
    backgroundAttachment: 'fixed',
    '& h1': {
     fontFamily: '"Press Start 2P" , cursive',
    }
  },
})


function App() {
  const classes = appStyles()
  return (
    <Router>
      <div className={classes.App}>
        <Navigator>
          <h1>files</h1>
          <TreeView/>
        </Navigator>
        <MainViewport>
            <Switch>
              <Route exact path="/">
                <TitleViewer/>
              </Route>
              <Route path="/qanon">
                goodbye
              </Route>
            </Switch>
        </MainViewport>
      </div>
    </Router>
  );
}

export default App;
