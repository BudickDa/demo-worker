import {expose} from "comlink";
import {getConnections} from "./Connections";

const ConnectionsWorker = {
    getConnections
};
expose(ConnectionsWorker);
