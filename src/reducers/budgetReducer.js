import { Map } from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function budgetReducer(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
        return setState(state, action.state);
    }
    return state;
}

export {budgetReducer};