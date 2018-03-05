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
        default: 
            return state;
    }
};
