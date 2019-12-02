import axios from 'axios';
import { fetchPosts, fetchPostsFails } from '../Store/Actions/actions';

export const initPosts = () => {
  return dispatch => {
    const url = 'http://jsonplaceholder.typicode.com/Posts';
    axios
      .get(url)
      .then(response => {
        dispatch(fetchPosts(response.data));
        console.log(response);
      })
      .catch(error => {
        dispatch(fetchPostsFails(error));
      });
  };
};
