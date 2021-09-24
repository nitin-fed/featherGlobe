import axios from 'axios';
import {
  fetchUsers,
  fetchUsersFailed,
  fetchSelectedUser
} from '../Store/Actions/users';

export const initUsers = () => {
  return dispatch => {
    const url = 'http://jsonplaceholder.typicode.com/Users';
    axios
      .get(url)
      .then(response => {
        dispatch(fetchUsers(response.data));
        console.log(response);
      })
      .catch(error => {
        dispatch(fetchUsersFailed(error));
      });
  };
};

export const showUserDetails = id => {
  return dispatch => {
    const url = 'http://jsonplaceholder.typicode.com/Users';
    axios.get(`${url}/${id}`).then(response => {
      dispatch(fetchSelectedUser(response.data));
    });
  };
};
