import { MAIL_SENT } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {

  case MAIL_SENT:
    console.log('success:', action.payload);
    return action.payload;

  default:
    return state;
  }
}
