import { ADD_USERS } from './user-actions';

export const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USERS:
      return payload;
    default:
      return state;
  }
};
