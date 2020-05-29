import {expose} from 'comlink';
import {encrypt, encryptWithFriends, create} from './Message';

export const Message = {
  encrypt,
  encryptWithFriends,
  create
};
expose(Message);