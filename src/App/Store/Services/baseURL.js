import axios from 'axios';

export const firebaseURL = axios.create({
  baseURL: 'https://codechallenge-eaad0.firebaseio.com/'
});

export const postsURL = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/'
});
