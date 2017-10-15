import * as ActionTypes from './actions';

const initialState = {
    graph: null
};

export default function overviewReducer(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.OVERVIEW_GRAPH:
        return { graph: action.graph }
    default:
        return state;
    }
}
