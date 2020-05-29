export interface User {
    uid: string
    name: string
}

export interface UserWorkerType {
    resolveUser: (uid: string) => Promise<User>
    resolveUserBulk: (uids: string[]) => Promise<User[]>
}


export const resolveUser = async (uid: string): Promise<User> => {
    return {
        uid,
        name: `name-${uid}`
    };
};

export const resolveUserBulk = async (uids: string[]): Promise<User[]> => {
    return Promise.all(uids.map(resolveUser));
};
