/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import Request from "utils/request";

const AuthContext = React.createContext();
function AuthProvider({ children }) {
  // Let's set an initial pending state
  const [state, setState] = React.useState({
    status: "pending",
    error: null,
    user: null,
  });

  const callGetUser = React.useCallback(() => {
    Request.get("/user").then(
      (user) => setState({ status: "success", error: null, user }),
      (error) => setState({ status: "error", error, user: null })
    );
  }, []);

  React.useEffect(() => {
    callGetUser();
  }, [callGetUser]);

  return (
    <AuthContext.Provider value={{ ...state, callGetUser }}>
      {state.status === "pending" ? "Loading..." : children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
    callGetUser: state.callGetUser,
  };
}
export { AuthProvider, useAuthState };
