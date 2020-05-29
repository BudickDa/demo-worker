import Dexie from "dexie";

const localDb = new Dexie("test-database");
localDb.version(2).stores({
    queue: '&id',
    connections: '&id'
});

export default localDb;