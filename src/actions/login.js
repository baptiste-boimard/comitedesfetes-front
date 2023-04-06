// ACTION for LOGIN component

/**Submit login form to auth middleware */
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

/**Submit signup form to auth middleware */
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const submitSignup = (email, password) => ({
  type: SUBMIT_SIGNUP,
  email,
  password,
});
