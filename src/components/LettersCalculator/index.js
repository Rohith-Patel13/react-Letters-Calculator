// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0, typingInput: ''}

  typingInputEvent = event => {
    const inputValueTyped = event.target.value
    const inputCount = inputValueTyped.length

    this.setState({count: inputCount, typingInput: inputValueTyped})
  }

  render() {
    const {count, typingInput} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="inputCard">
            <label for="inputEl" className="para">
              Enter the phrase
            </label>

            <input
              id="inputEl"
              type="text"
              placeholder="Enter the phrase"
              className="inputStyle"
              value={typingInput}
              onChange={this.typingInputEvent}
            />
          </div>
          <div className="btnEl">
            <p>No.of letters: {count}</p>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="imgEl"
        />
      </div>
    )
  }
}

export default LettersCalculator
