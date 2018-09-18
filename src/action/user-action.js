import superagent from 'superagent';
import cookies from 'react-cookies';

export const LOGIN = 'LOGIN';

export const signin = () => ({
  type: LOGIN,
  payload: {login: true},
});

export const signinThunk = (user) => {
  return dispatch => {
    superagent
      .get(`${process.env.USER_API_URL}/signin`)
      .auth(user.username, user.password)
      .then(response => {
        cookies.save('userToken', response.text);
        dispatch(signin());
      });
  };
};

