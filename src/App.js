import Navigator from './components/Navigator';
import TitleViewer from './routes/TitleViewer';
import About from './routes/About';
import Projects from './routes/Projects';
import Contributions from './routes/Contributions';
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
    fontFamily: "'Anonymous Pro' , monospace",
    backgroundImage: `url(${bg})`,
    height: '100%',
    backgroundAttachment: 'fixed',
    '& h1': {
     fontFamily: '"Press Start 2P" , cursive',
     color: 'black'
    }
  },
  '@media only screen and (max-width: 600px)' :{
    App : {
      flexDirection: 'column',
      height: '100%',
    }
  }
})

function App() {
  const classes = appStyles()
  return (
    <Router>
      <div className={classes.App}>
        <Navigator>
          <h1 className="font-effect-3d">files</h1>
          <TreeView/>
        </Navigator>
        <MainViewport>
            <Switch>
              <Route exact path="/">
                <TitleViewer/>
              </Route>
              <Route path="/projects">
                <Projects/>
              </Route>
              <Route path="/contributions">
                <Contributions/>
              </Route>
              <Route path="/aboutus">
                <About/>
              </Route>
            </Switch>
        </MainViewport>
      </div>
    </Router>
  );
}

export default App;
