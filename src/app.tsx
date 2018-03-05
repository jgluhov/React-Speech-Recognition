import { Counter, Recognizer } from '@containers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './app.scss';
import { counter, recognizer } from './reducers';

const store = createStore(combineReducers({
    counter,
    recognizer
}));

ReactDOM.render(
    <Provider store={store}>
        <div className="App">
            <Counter />
            <Recognizer />
        </div>
    </Provider>,
    document.getElementById('app')
);
