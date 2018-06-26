import React, { Component } from 'react'; //eslint-disable-line


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term} 
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
/*
  REPLACED WITH ES6 FAT ARROW
  onInputChange(event) {
    console.log(event.target.value);

  }
*/
}

export default SearchBar;
/* ----NOTES----
value={this.state.term} turns the component into a controlled component.
Instead of the input telling the state value to change, the state now tells the
input value to change. 
DATA-FLOW:
  1. input.value = state.term
  2. User types into input
  3: onChange fires setState(event.target.value) to update component state
  4: state change triggers re-render
  5: input.value updated with new state.term
*/