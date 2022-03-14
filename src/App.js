import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Post from './Views/Post/Post';
import Dashboard from './Views/Dashboard/Dashboard';
import Home from './Views/Home/Home';
import Write from './Views/Escrever/Write';
import Terminal from './components/Terminal';

import './momentConfig';
import './Styles/BaseStyle.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/escrever" exact={true} component={Write} />
          <Route path='/dashboard' exact={true} component={Dashboard} />

          <Terminal>
            <Route path='/' exact={true} component={Home} />
            <Route path='/:slug' exact={true} component={Post} />
          </Terminal>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;