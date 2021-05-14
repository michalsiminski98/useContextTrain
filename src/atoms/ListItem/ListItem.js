import { useContext } from "react";
import PropTypes from "prop-types";
import { UsersContext } from "../../providers/UserProvider";

const ListItem = ({ name }) => {
  const { handleDeleteUser } = useContext(UsersContext);

  return (
    <li>
      {name} <button onClick={() => handleDeleteUser(name)}>Delete</button>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
};

export default ListItem;
