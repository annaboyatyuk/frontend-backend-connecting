//action creators
import superagent from 'superagent';

// Thunk action returns a function that dispatches an action.
export const fetchAllThunk = () => {
  return dispatch => {
    superagent
      .get(`${process.env.API_URL}/api/v1/pizza`)
      .then(response => {
        // dispatch(response.body)
        console.log(response.body);
      });
  };
}