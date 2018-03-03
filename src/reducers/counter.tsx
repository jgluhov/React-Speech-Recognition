interface CounterState {
    count: number;
}

const initialState = {
    count: 0
};

export const counter = (state: CounterState = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_INCREASE': {
            return {
                count: state.count + 1
            };
        }

        case 'COUNTER_DECREASE': {
            return {
                count: state.count - 1
            };
        }

        default: 
            return state;
    }
};
