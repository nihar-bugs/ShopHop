import {
  loginFailure,
  loginSuccess,
  loginStart,
  logOutUser,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);

    if (res.data.username) {
      dispatch(loginSuccess(res.data));
      window.localStorage.setItem("Token", JSON.stringify(res.data.authToken));
    } else {
      dispatch(loginFailure());
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logOutUser());
  window.localStorage.removeItem("Token");
};
