import { useContext } from "react";
import { UsersContext } from "../../templates/Root";

const ListItem = ({ name }) => {
  const { handleDeleteUser } = useContext(UsersContext);

  return (
    <li>
      {name} <button onClick={() => handleDeleteUser(name)}></button>
    </li>
  );
};

export default ListItem;
