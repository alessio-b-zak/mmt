import './App.css';
import Navigator from './components/Navigator';
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
    backgroundAttachment: 'fixed'
  },
})


function App() {
  const classes = appStyles()
  return (
    <Router>
      <div className={classes.App}>
        <Navigator/>
        <MainViewport>
            <p>hello</p>
        </MainViewport>
      </div>
    </Router>
  );
}

export default App;
