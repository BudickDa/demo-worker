import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {RootState} from "./redux/reducers";
import {sendMessage} from "./redux/actions";
import {ConnectionsWorker} from "./modules/connections/worker";

interface AppPropsType {
    sendMessage: Function
}

interface AppStateType {
    friends: string[]
}

class App extends Component <AppPropsType, AppStateType> {
    public state: AppStateType = {
        friends: []
    };

    componentDidMount(): void {
        this.load().catch(console.error);
    }

    load = async () => {
        const friends = await ConnectionsWorker.getFriends();
        this.setState({friends});
    };

    render() {
        return <div className="App">
            <h2>Friends</h2>
            <ul>
                {this.state.friends.map((name: string) => <li>{name}</li>)}
            </ul>
            <button onClick={() => (this.props.sendMessage("ABCD"))}>Send</button>
        </div>;
    }
}

function mapStateToProps(state: RootState) {
    return {};
}

function mapDispatchToProps(dispatch: Function) {
    return {
        sendMessage: (message: string) => (dispatch(sendMessage(message)))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
