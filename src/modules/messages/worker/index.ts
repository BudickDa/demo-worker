import {wrap} from "comlink";
import {MessageWorkerType} from "./Message";

/**
 * Expose worker
 */
export const MessageWorker: MessageWorkerType = wrap<MessageWorkerType>(new Worker("./Message.worker.js", {type: "module"}));
