import {wrap} from "comlink";
import {MessageWorkerType} from "./Message";
import {P2PWorkerType} from "./P2P";

/**
 * Expose worker
 */
export const MessageWorker: MessageWorkerType = wrap<MessageWorkerType>(new Worker("./Message.worker.js", {type: "module"}));
export const P2PWorker: P2PWorkerType = wrap<P2PWorkerType>(new Worker("./P2P.worker.js", {type: "module"}));
