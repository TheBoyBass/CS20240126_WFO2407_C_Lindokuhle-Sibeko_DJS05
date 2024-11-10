// Initial state
const initialState = { count: 0 };

// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'SUBTRACT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: 0 };
        default:
            return state;
    }
};

// Store function
const createStore = (reducer) => {
    let state = reducer(undefined, {}); // Initialize state
    const listeners = [];

    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener(state));
        },
        subscribe: (listener) => {
            listeners.push(listener);
            return () => {
                const index = listeners.indexOf(listener);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
            };
        }
    };
};

// Export the store and reducer
export { createStore, reducer };