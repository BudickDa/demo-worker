import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {RootState} from "./redux/reducers";
import {loadFriends, makeError, sendMessage} from "./redux/actions";
import {ConnectionsWorker} from "./modules/connections/worker";

interface AppPropsType {
    sendMessage: Function
    loadFriends: Function
    fail: Function
}

interface AppStateType {
    friends: string[]
}

class App extends Component <AppPropsType, AppStateType> {
    public state: AppStateType = {
        friends: []
    };

    componentDidMount(): void {
        this.load().catch((err) => {
            console.log("Does not load friends in App.tsx, but throws:");
            console.error(err);
        });
    }

    load = async () => {
        const friends = await ConnectionsWorker.getConnections();
        console.log("Should load friends:", friends.join(", "));
        this.setState({friends});
    };

    render() {
        return <div className="App">
            <h2>Friends</h2>
            <ul>
                {this.state.friends.map((name: string) => <li key={`app-list-${name}`}>{name}</li>)}
            </ul>
            <button onClick={() => (this.props.sendMessage("ABCD"))}>Send</button>
            <button onClick={() => (this.props.loadFriends())}>Load friends by hand</button>
            <button onClick={() => (this.props.fail())}>Create error</button>
        </div>;
    }
}

function mapStateToProps(state: RootState) {
    return {};
}

function mapDispatchToProps(dispatch: Function) {
    return {
        sendMessage: (message: string) => (dispatch(sendMessage(message))),
        loadFriends: () => (dispatch(loadFriends())),
        fail: () => (dispatch(makeError("Message")))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
