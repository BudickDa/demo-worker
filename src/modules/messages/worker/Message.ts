export interface MessageWorkerType {
    encrypt: (payload: string) => Promise<string>
}


export const encrypt = async (payload: string): Promise<string> => {
    return `<encrypted>${payload}</encrypted>`
};

