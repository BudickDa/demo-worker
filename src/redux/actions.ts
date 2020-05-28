import {MessageWorker} from "../modules/messages/worker";

export function sendMessage(message: string) {
    return async (dispatch: Function, getState: Function) => {
        const encryptedMessage = await MessageWorker.encrypt(message);
        //send message...
    };
}