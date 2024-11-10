// index.js

import { createStore, reducer } from './TallyStore.js';
import { addAction, subtractAction, resetAction } from './TallyActions.js';

// Create the store
const store = createStore(reducer);

// Subscribe to state changes
store.subscribe((newState) => {
    console.log('State changed:', newState);
});

// Initial state
console.log('Initial state:', store.getState());

// Dispatch actions
store.dispatch(addAction());
store.dispatch(addAction());
store.dispatch(subtractAction());
store.dispatch(resetAction());