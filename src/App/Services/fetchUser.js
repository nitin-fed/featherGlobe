import axios from "axios";
import { fetchUser } from "../Store/Actions/users";

// export const fetchUser = dispatch => {
//   const response = axios.get("http://localhost:3001/users");
//   response.then(res => {
//     dispatch(fetchUser(res.data));
//   });
// };

export const loadUser = () => {
  return dispatch => {
    const url = "http://localhost:3001/users";
    axios
      .get(url)
      .then(response => {
        dispatch(fetchUser(response.data));
      })
      .catch(error => {
        //dispatch(fetchUsersFailed(error));
      });
  };
};
