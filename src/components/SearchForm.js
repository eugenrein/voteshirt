import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Logo from './Logo.js';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state.search);
  }

  render() {
    return (
      <div className="search-form">
        <Logo linkTo="/" />
        <div className="search-input">
          <TextField 
            hintText="Type in your keywords"
            fullWidth={true}
            onChange={(event) => this.handleChange(event)} />
        </div>
        <div className="search-submit">
          <RaisedButton
            label="Search" 
            primary={true} 
            fullWidth={true}
            onClick={() => this.handleSubmit()} />
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
