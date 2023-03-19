import shortid from 'shortid';

//selectors
export const getUser = ({ user }) => user;
export const getUserByLogin = ({ user }, login) =>
  user.find((user) => user.login === login);
// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const ADD_USER = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

// action creators
export const addUser = (payload) => ({ type: ADD_USER, payload });
export const logOut = () => ({ type: LOG_OUT });

const userReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...statePart, { ...action.payload, id: shortid() }];
    case LOG_OUT:
      return null;
    default:
      return statePart;
  }
};
export default userReducer;
