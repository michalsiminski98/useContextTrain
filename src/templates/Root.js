import React, { useState } from "react";
import List from "../molecules/List/List";
import { users as usersData } from "../data/users";

export const UsersContext = React.createContext({
  users: [],
  handleDeleteUser: () => {},
});

function Root() {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (clickedUserName) => {
    const newUsers = users.filter((user) => user.firstName !== clickedUserName);
    setUsers(newUsers);
  };

  return (
    <UsersContext.Provider value={{ users, handleDeleteUser }}>
      <List />
    </UsersContext.Provider>
  );
}

export default Root;
