import {wrap} from "comlink";
import {ConnectionsWorkerType} from "./Connections";

export const ConnectionsWorker: ConnectionsWorkerType = wrap<ConnectionsWorkerType>(new Worker("./Connections.worker.js", {type:"module"}));