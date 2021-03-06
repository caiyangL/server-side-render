import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as HomeReducer } from '@/modules/Home/store';
import { reducer as MainReducer } from '@/modules/main/store';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (preloadState, axsioInstance) => {
    const rootReducer = combineReducers({
        home: HomeReducer,
        main: MainReducer,
    });

    return createStore(rootReducer, preloadState, composeEnhancers(applyMiddleware(thunk.withExtraArgument(axsioInstance))))
}