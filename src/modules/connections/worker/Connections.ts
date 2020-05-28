export interface ConnectionsWorkerType {
    getFriends: () => Promise<string[]>
    getFriendBatch: (uids: string[]) => Promise<string[]>
}


export const getConnections = async (): Promise<string[]> => {
    return [
        "A", "B", "C"
    ];
};
