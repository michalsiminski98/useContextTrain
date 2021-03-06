import { useContext } from "react";
import ListItem from "../../atoms/ListItem/ListItem";
import { UsersContext } from "../../providers/UserProvider";

const List = () => {
  const { users } = useContext(UsersContext);
  return (
    <>
      {users.map(({ firstName }) => (
        <ListItem key={firstName} name={firstName} />
      ))}
    </>
  );
};

export default List;
