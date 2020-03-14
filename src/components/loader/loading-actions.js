export const ADD_LOADER = 'ADD_LOADER';
export const REMOVE_LOADER = 'REMOVE_LOADER';
export const CLEAR_LOADERS = 'CLEAR_LOADERS';

export function addLoader(actionName) {
  return {
    type: ADD_LOADER,
    payload: {
      id: actionName
    }
  };
}

export function removeLoader(actionName) {
  return {
    type: REMOVE_LOADER,
    payload: {
      id: actionName
    }
  };
}

export function clearLoaders() {
  return {
    type: CLEAR_LOADERS };
}
