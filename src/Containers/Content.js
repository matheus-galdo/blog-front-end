import Post from '../Views/Post/Post';
import Home from '../Views/Home/Home';
import Write from '../Views/Escrever/Write';
import Dashboard from '../Views/Dashboard/Dashboard';

import { BrowserRouter, Switch, Route} from 'react-router-dom'

function Content() {
    return (
        <div id="main-container">
                <Switch>
                    
                    
                    <Route path="/escrever" exact={true} component={Write}/>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/dashboard' exact={true} component={Dashboard}/>
                    <Route path='/:slug' component={Post}/>

                </Switch>
        </div>
    )
}

export default Content



            