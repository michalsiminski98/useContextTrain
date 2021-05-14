import React from "react";
import List from "../molecules/List/List";
import UserProvider from "../providers/UserProvider";

function Root() {
  return (
    <UserProvider>
      <List />
    </UserProvider>
  );
}

export default Root;
