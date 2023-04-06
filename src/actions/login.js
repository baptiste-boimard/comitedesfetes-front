// ACTION for LOGIN component

/** Open/close signup modal */
export const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';
export const toggleSignup = () => ({
  type: TOGGLE_SIGNUP,
});

/** Open/close login modal */
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const toggleLogin = () => ({
  type: TOGGLE_LOGIN,
});

/**Close signup modal */
export const CLOSE_SIGNUP = 'CLOSE_SIGNUP';
export const closeSignup = () => ({
  type: CLOSE_SIGNUP,
});

/**Close login modal */
export const CLOSE_LOGIN = 'CLOSE_LOGIN';
export const closeLogin = () => ({
  type: CLOSE_LOGIN,
});

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
