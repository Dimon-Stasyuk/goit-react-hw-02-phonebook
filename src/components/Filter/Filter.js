import PropTypes from "prop-types";
import React from "react";
import "./Filter.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className="filter-container">
      <label className="filter-lable">
        Find contacts by name
        <input
          className="filter-input"
          value={value}
          onChange={onChange}
          type="text"
          name="filter"
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
