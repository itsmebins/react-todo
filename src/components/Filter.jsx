import React, { memo } from "react";
import PropTypes from "prop-types";

const Filter = ({ label, onFilter, active }) => {
  return (
    <div className={"todo-item-label"} onClick={onFilter}>
      <span className={active ? "active-todo" : null}>{label}</span>
    </div>
  );
};

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  active: PropTypes.bool
};

export default Filter;
