import {MessageWorker} from "../modules/messages/worker";
import {ConnectionsWorker} from "../modules/connections/worker";
import {getConnections} from "../modules/connections/worker/Connections";

export function sendMessage(message: string) {
    return async (dispatch: Function, getState: Function) => {
        const encryptedMessage = await MessageWorker.encrypt(message);
        //send message...
        console.log(encryptedMessage);
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

export function makeError(message: string) {
    return async (dispatch: Function, getState: Function) => {
        const encryptedMessage = await MessageWorker.encryptWithFriends(message);
        //send message...
        console.log(encryptedMessage);
    };
}
