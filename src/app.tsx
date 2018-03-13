import { Counter, Recognizer, SpeechRecognitionSupport } from '@containers';
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
        <SpeechRecognitionSupport>
            <div className="App">
                <Counter />
                <Recognizer />
            </div>
        </SpeechRecognitionSupport>        
    </Provider>,
    document.getElementById('app')
);
