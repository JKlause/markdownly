export const TAB_NAME_CHANGE = 'TAB_NAME_CHANGE';

export const sendTabName = tabName => ({
  type: TAB_NAME_CHANGE,
  payload: tabName
});

export const ADD_TAB = 'ADD_TAB';

export const addTab = name => ({
  type: ADD_TAB,
  payload: name
});

export const NEW_HISTORY = 'NEW_HISTORY';

export const newHistory = (name, body) => ({
  type: NEW_HISTORY,
  payload: [name, body]
});

export const UPDATE_HISTORY = 'UPDATE_HISTORY';

export const updateHistory = (name, body) => ({
  type: UPDATE_HISTORY,
  payload: [name, body]
});


