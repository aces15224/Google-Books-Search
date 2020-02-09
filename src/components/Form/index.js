import React from "react";


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for books!  Save them for later!</h2></label>
      <input
        onChange={props.handleInputChange}
        search={props.search}
        type="text"
        name="bookSearch"
        className="form-control"
        placeholder="Enter Book Title Here"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;
