import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
