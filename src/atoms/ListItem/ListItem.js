import { useContext } from "react";
import { UsersContext } from "../../templates/Root";
import PropTypes from "prop-types";

const ListItem = ({ name }) => {
  const { handleDeleteUser } = useContext(UsersContext);

  return (
    <li>
      {name} <button onClick={() => handleDeleteUser(name)}></button>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
};

export default ListItem;
