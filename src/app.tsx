import { Counter } from '@containers';
import { Dictaphone } from '@components';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './app.scss';
import { counter } from './reducers';

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <div className="App">
            <Counter />
            <Dictaphone />
        </div>
    </Provider>,
    document.getElementById('app')
);
