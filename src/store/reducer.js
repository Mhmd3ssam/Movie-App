const INITIAL_STATE = [];

export default function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_FAV":
        return [
          {
          ...action.payload,
        },...state];
      default:
        return state;
    }
}


export function favoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteList: [...state.favoriteList],
      };
    default:
      return state;
  }
}