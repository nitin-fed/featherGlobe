

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const reqHeader = {
  baseURL: "/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
};

export const axiosMockInstance = axios.create(reqHeader);
export const axiosLiveInstance = axios.create(reqHeader);

console.log(process.env.NODE_ENV);

export const axiosInstance =
  process.env.NODE_ENV === "development"
    ? axiosMockInstance
    : axiosLiveInstance;

let mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });
mock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
  delay: 3000,
});
