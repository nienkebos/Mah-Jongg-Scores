// Player geeft input; welke stenen heeft hij op tafel/plank
import React, { Component, PropTypes } from 'react'

class Input extends Component {
  state = {
    concealed: 10,
    exposed: 12,
    images: 14
  };

  changeState = (e) => {
    const field = e.target.name;
    this.setState({
      [field] : e.target.value
    });
  }

  addScore = (e) => {
    if (e) e.preventDefault()
    this.props.addScore(this.state);
  };

  render() {
    const { addScore } = this.props;
    return (
      <form onSubmit={this.addScore}>

        <div className="concealed">
          <label>
            Fill in your concealed tiles
            <input type="number" onChange={this.changeState} name="concealed" value={this.state.concealed}/>
          </label>
        </div>

        <div className="exposed">
          <label>
            Fill in your exposed tiles
            <input type="number" onChange={this.changeState} name="exposed" value={this.state.exposed}/>
          </label>
        </div>

        <div className="images">
          <label>
            Fill in Season or Flower tiles
            <input type="number" onChange={this.changeState} name="images" value={this.state.images}/>
          </label>
        </div>

        <input type="submit" value="Submit"/>

      </form>
    )
  }
}

Input.propTypes = {
  addScore: PropTypes.func.isRequired
}

export default Input;
