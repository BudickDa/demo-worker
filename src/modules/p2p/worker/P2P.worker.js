import {expose} from 'comlink';
import {sendMessage, getMessages} from './P2P';

export const P2P = {
  sendMessage,
  getMessages
};
expose(P2P);