export interface ConnectionsWorkerType {
    getConnections: () => Promise<string[]>
}


export const getConnections = async (): Promise<string[]> => {
    return [
        "A", "B", "C"
    ];
};
