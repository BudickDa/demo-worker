import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {RootState} from "./redux/reducers";
import {loadFriends, encryptMessage, sendMessage} from "./redux/actions";
import {ConnectionsWorker} from "./modules/connections/worker";
import "./database";
import localDb from "./database";

interface AppPropsType {
    sendMessage: Function
    loadFriends: Function
    encryptMessage: Function
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
        /**
         * Seed table before load
         */
        const connectionTable = localDb.table("connections");
        await connectionTable.bulkPut([
            {id: "A", name: "A"},
            {id: "B", name: "B"},
            {id: "C", name: "C"},
            {id: "D", name: "D"}
        ]);


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
            {/*<button onClick={() => (this.props.loadFriends())}>Load friends by hand</button>*/}
            {/*<button onClick={() => (this.props.encryptMessage())}>Encrypt</button>*/}
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
        encryptMessage: () => (dispatch(encryptMessage("Message")))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
