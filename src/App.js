import './App.css';
import {createUseStyles} from 'react-jss';
import logo from './assets/logo.png'
import bg from './assets/bg.png';

const useStyles = createUseStyles({
  App: {
    textAlign: 'center',
    display: 'flex',
    backgroundImage: `url(${bg})`,
    height: '100%',
    backgroundAttachment: 'fixed'
}})



function App() {
  const classes = useStyles()
  return (
    <div className={classes.App}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>hello</p>
    </div>
  );
}

export default App;
