import { ADD_LOADER, REMOVE_LOADER, CLEAR_LOADERS } from './loading-actions';

const initialState = [];

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOADER: {
      if (state.filter(item => item === action.payload.id).length <= 0) {
        return [...state, action.payload.id];
      }
      return state;
    }

    case REMOVE_LOADER:
      return state.filter(item => item !== action.payload.id);

    case CLEAR_LOADERS:
      return initialState;

    default:
      return state;
  }
};
