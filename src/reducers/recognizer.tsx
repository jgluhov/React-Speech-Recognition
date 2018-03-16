interface RecognizerState {
    welcome: string;
    command: string;
}

const initialState = {
    welcome: 'What to do ?',
    command: ''
};

export const recognizer = (state: RecognizerState = initialState, action) => {
    switch (action.type) {
        case 'RECOGNIZER_COMMAND_INCREASE': {
            return Object.assign({}, state, {
                command: 'Increase'
            });
        }

        case 'RECOGNIZER_COMMAND_DECREASE': {
            return Object.assign({}, state, {
                command: 'Decrease'
            });
        }
        default: 
            return state;
    }
};
