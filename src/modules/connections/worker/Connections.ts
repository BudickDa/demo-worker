import localDb from "../../../database";

export interface ConnectionsWorkerType {
    getConnections: () => Promise<string[]>
}


export const getConnections = async (): Promise<string[]> => {
    return (await localDb.table("connections").toArray()).map((c: any) => c.name);
};
