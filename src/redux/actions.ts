import {ConnectionsWorker} from "../modules/connections/worker";
import {MessageWorker, P2PWorker} from "../modules/p2p/worker";

export function sendMessage(message: string) {
    return async (dispatch: Function, getState: Function) => {
        const encryptedMessage = await MessageWorker.encrypt(message);
        console.log(encryptedMessage);
        //send message...
        await P2PWorker.sendMessage(encryptedMessage);


    };
}

export function loadFriends() {
    return async (dispatch: Function, getState: Function) => {
        try {
            const friends = await ConnectionsWorker.getConnections();
            console.log("Should load friends:")
            console.log(friends);
        }catch(err){
            console.log("Did not load friends manually, but throws:");
            console.error(err);
        }
    };
}

export function encryptMessage(message: string) {
    return async (dispatch: Function, getState: Function) => {
        const encryptedMessage = await MessageWorker.encryptWithFriends(message);
        //send message...
        console.log(encryptedMessage);
    };
}
