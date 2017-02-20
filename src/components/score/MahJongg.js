/* Extra punten en verdubbelaars wanneer Mah Jongg */
import React, { Component, PropTypes } from 'react';

class MahJongg extends Component {
  state = {
    mahJongg: false,
    lastStone: ''
  };

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    console.log('checkbox',e.target);
    this.setState({
      [field]: value
    });
  }

  addMahJongg = (e) => {
    if (e) e.preventDefault();
    this.props.addMahJongg(this.state.mahJongg, this.state.lastStone);
  };

  render() {
    const { addMahJongg } = this.props;

    return (
      <form className="mahjongg" onSubmit={this.addMahJongg}>
        <label>
          Mah Jongg:
          <input
            name= "mahJongg"
            type="checkbox"
            checked={this.state.mahJongg}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Winnende steen:
          <select
            name="lastStone"
            value={this.state.lastStone}
            onChange={this.handleChange}>
              <option value="0">van tafel </option>
              <option value="10">door kong-roof </option>
              <option value="2">van de muur </option>
              <option value="10">van dode muur </option>
              <option value="10">laatste van levende muur </option>
          </select>
        </label>
        <input type="submit" value="Submit"/>

      </form>
  )}
}

MahJongg.propTypes = {
  addMahJongg: PropTypes.func.isRequired
}

export default MahJongg;
