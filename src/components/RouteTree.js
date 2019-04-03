import { Switch, Route } from 'react-router-dom'
import Searchbar from './Searchbar';

function RouteTree() {
    <main>
        <Switch>
            <Route exact path="/" component={ Searchbar } />
            <Route path='/word' component={ Definitions } />
        </Switch>
    </main>
}