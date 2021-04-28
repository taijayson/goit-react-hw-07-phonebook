import React from "react";
import { connect } from "react-redux";
import { getUsername } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div>
      <span>Welcome, {name}</span>

      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
