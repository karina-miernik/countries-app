import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
const Form = () => {
  return (
    <>
      <div className="ml-3">
        <InputGroup>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    </>
  );
};

export default Form;
