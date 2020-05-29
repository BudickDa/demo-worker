import {getConnections} from "../../connections/worker/Connections";
import {MessageInterface} from "../MessageType";

export interface MessageWorkerType {
    create: (payload: string) => Promise<MessageInterface>
    encrypt: (payload: string) => Promise<string>
    encryptWithFriends: (payload: string) => Promise<string>
}

export const create = async (payload: string): Promise<MessageInterface> => {
    return {
        id: `${Math.random()}`,
        payload,
    };
};


export const encrypt = async (payload: string): Promise<string> => {
    return `<encrypted>${payload}</encrypted>`
};

/**
 * For some reason we need all contacts to encrypt
 * @param payload
 */
export const encryptWithFriends = async (payload: string): Promise<string> => {
    const friends = await getConnections();
    console.log(friends);
    return `<encrypted>${payload}</encrypted>`
};

