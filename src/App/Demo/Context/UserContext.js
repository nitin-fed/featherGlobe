import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();
export function UserProvider(props) {
  let [state, setUsers] = useState({
    name: 'default name',
    lastName: 'deafult last name'
  });

  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    console.log('i m here');
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux'
    );
    setData(result.data);
    debugger;
  });
  console.log('I m out of use effect');

  // useEffect(() => {
  //     const fetchData = async () => {
  //         debugger
  //         const url = 'http://jsonplaceholder.typicode.com/Users'
  //         const result = await axios.get(url)
  //             .then((response) => {
  //                 return response
  //             })
  //             .catch((err) => {
  //                 console.log(err)
  //             })

  //             console.log(result)
  //         setUsers(result.data);
  //     };

  //     fetchData();
  // }, [state])
  // debugger
  // console.log(state);

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
}
