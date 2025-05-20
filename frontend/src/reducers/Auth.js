const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Action creators
export const login = (payload) => ({
  type: "LOGIN",
  payload,
});

export const logout = () => ({
  type: "LOGOUT",
});

export default authReducer;
