import React, { Component } from 'react';

class CollegeNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: null
    };
    const { handleSearch } = props;
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.name);
  }

  render() {
    return (
      <div className="col-8 offset-2">
        <h2>College Search</h2> 
        <form onSubmit={this.handleSubmit}>
          <label>
            College Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" className="btn btn-secondary m-2"/>
        </form>
      </div>
    );
  }
}

export default CollegeNameForm;