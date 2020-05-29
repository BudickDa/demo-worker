import {expose} from 'comlink';
import {encrypt, encryptWithFriends} from './Message';

export const Message = {
  encrypt,
  encryptWithFriends
};
expose(Message);