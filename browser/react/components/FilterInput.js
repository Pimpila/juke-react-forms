import React from 'react';

const FilterInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        onChange={(event) => props.collectInput(event)}
        className="form-control"
        placeholder="Enter artist name"
      />
    </form>
  );
}

export default FilterInput;
