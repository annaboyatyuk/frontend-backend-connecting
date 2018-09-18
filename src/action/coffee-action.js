//action creators
import superagent from 'superagent';

export const FETCH_ALL='FETCH_ALL';

export const fetchAll = (coffee) => ({
  type: FETCH_ALL,
  payload: coffee,
});


// Thunk action returns a function that dispatches an action.
export const fetchAllThunk = () => {
  return dispatch => {
    superagent
      .get(`${process.env.API_URL}/api/v1/coffee`)
      .then(response => {
        // console.log(response.body)
        dispatch(fetchAll(response.body));
      });
  };
};
