import Navigator from './components/Navigator';
import TitleViewer from './routes/TitleViewer';
import About from './routes/About';
import Projects from './routes/Projects';
import Contributions from './routes/Contributions';
import TreeView from './components/TreeView';

import LilyAnimation from './routes/Contribs/Lily'
import Untitled from './routes/Contribs/Untitled'
import UntitledPoems from './routes/Contribs/UntitledPoems'
import MainViewport from './components/MainViewport';
import EffingRobots from './routes/Contribs/EffingRobots';
import {createUseStyles} from 'react-jss';
import Qanon from './routes/Projects/Qanon';
import QanonInfo from './routes/Projects/QanonInfo'

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
    width: '100vw',
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


const links = [
    {
        linkText: "home",
        url: "/"
    },
    {
        linkText : "projects",
        url : "/projects"
    },
    {
        linkText: "contributions",
        url: "/contributions"
    },
    {
        linkText : "about us",
        url :  "/aboutus"
    },
]

function App() {
  const classes = appStyles()
  return (
    <Router>
      <div className={classes.App}>
        <Navigator>
          <h1 className="font-effect-3d">files</h1>
          <TreeView links={links} />
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
              <Route path="/perpetuity">
                <LilyAnimation/>
              </Route>
              <Route path="/untitled">
                <Untitled/>
              </Route>
              <Route path="/untitledpoems">
                <UntitledPoems/>
              </Route>
              <Route path="/effingrobots">
                <EffingRobots/>
              </Route>
             <Route path="/qanoninfo">
                <QanonInfo/>
              </Route>
              <Route path="/qanon">
                <Qanon/>
              </Route>
             </Switch>
        </MainViewport>
      </div>
    </Router>
  );
}

export default App;
