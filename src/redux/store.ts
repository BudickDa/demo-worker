import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, Store, Action} from 'redux';
import globalReducer, {RootState} from './reducers';



let middleware = applyMiddleware(thunkMiddleware);
if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(
        thunkMiddleware
    );
}

const store: Store<RootState> = createStore<RootState, Action<any>, unknown, unknown>(globalReducer, {}, middleware);

export default store;
