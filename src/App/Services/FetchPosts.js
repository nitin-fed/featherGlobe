import axios from "axios";
export const fetchPosts = dispatch => {
  const url = "http://jsonplaceholder.typicode.com/Posts";
  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export const getSecrateWord = () => {
  return axios
    .get("http://jsonplaceholder.typicode.com/Posts")
    .then(res => res.data);
};
