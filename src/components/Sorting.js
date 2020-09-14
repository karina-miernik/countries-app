import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Sorting = () => {
  return (
    <>
      <Dropdown className="ml-3">
        <Dropdown.Toggle
          variant="outlined"
          id="dropdown-basic"
          bg="dark"
          variant="dark"
        >
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Country name A-Z</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Country name Z-A</Dropdown.Item>
          {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Sorting;
