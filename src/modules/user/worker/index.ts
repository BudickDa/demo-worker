import {wrap} from "comlink";
import {UserWorkerType} from "./User";

/**
 * Expose worker
 */
export const UserWorker: UserWorkerType = wrap<UserWorkerType>(new Worker("./User.worker.js", {type: "module"}));
