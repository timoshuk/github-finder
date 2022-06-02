export const githubReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_USERS": {
      return { ...state, loading: false, users: [] };
    }
    case "GET_USERS":
      return { ...state, users: action.payload, loading: false };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};
