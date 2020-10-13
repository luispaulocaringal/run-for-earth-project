import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Main } from './pages';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export default class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' render={({ history }) => <Main history={history} />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
        , document.getElementById('app'));
}
