import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReadPost from './views/ReadPost.view';
import Dashboard from './views/Admin/Dashboard.view';
import Home from './views/Home.view';
import WritePost from './views/Admin/WritePost.view';
import Terminal from './components/Terminal';

import './config/momentConfig';
import './styles/BaseStyle.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/escrever" exact={true} component={WritePost} />
          <Route path='/dashboard' exact={true} component={Dashboard} />

          <Terminal>
            <Route path='/' exact={true} component={Home} />
            <Route path='/:slug' exact={true} component={ReadPost} />
          </Terminal>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;