/** @format */

const response = axios.get("http://localhost:3001/users");
response.then((res) => {
  setUserName(res.data["name"]);
});
