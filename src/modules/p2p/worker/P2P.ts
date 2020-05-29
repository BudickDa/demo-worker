import {create} from "./Message";
import {MessageInterface} from "../MessageType";
import localDb from "../../../database";
import {Message} from "./Message.worker";

export interface P2PWorkerType {
    sendMessage: (payload: string) => Promise<void>,
}

export const getMessages = async (): Promise<MessageInterface[]> => {
    return [];
};

export const sendMessage = async (payload: string): Promise<void> => {
    const message = await Message.create(payload);//this is wrong!
    console.log("Sent: ", message);
    await localDb.table("queue").put(message);
};

/*
export const sendMessage = async (payload: string): Promise<void> => {
    const message = await create(payload);
    console.log("Sent: ", message);
    await localDb.table("queue").put(message);
};
 */
