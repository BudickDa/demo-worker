import {expose} from 'comlink';
import {encrypt} from './Message';

export const Message = {
  encrypt,
};
expose(Message);