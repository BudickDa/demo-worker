import {combineReducers} from "redux";


export interface MyState {}
function foo(state: MyState = {},
                     action: any): MyState {
    switch (action.type) {
        case "FOO":
            return {};
        default:
            return state;
    }
}

const globalReducer: any = combineReducers({
    foo
});

export type RootState = ReturnType<typeof globalReducer>;
export default globalReducer;
