import {getConnections} from "../../connections/worker/Connections";

export interface MessageWorkerType {
    encrypt: (payload: string) => Promise<string>,
    encryptWithFriends: (payload: string) => Promise<string>,
}


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

