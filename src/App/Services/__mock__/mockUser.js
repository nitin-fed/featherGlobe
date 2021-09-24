const response = axios.get("http://localhost:3001/users");
response.then(res => {
  console.log(res.data);
  setUserName(res.data["name"]);
});