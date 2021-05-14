import React, { useState } from "react";
import { users as usersData } from "../data/users";

export const UsersContext = React.createContext({
  users: [],
  handleDeleteUser: () => {},
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (clickedUserName) => {
    const newUsers = users.filter((user) => user.firstName !== clickedUserName);
    setUsers(newUsers);
  };

  return (
    <UsersContext.Provider value={{ users, handleDeleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
