// Write your code here
import {Component} from 'react'
import './index.css'
class StopWatch extends Component {
  state = {timerange: 0}
  componentWillUnmount() {
    clearInterval(this.timeinterval)
  }
  stopwatch = () => {
    this.setState(prevState => ({
      timerange: prevState.timerange + 1,
    }))
  }
  onStart = () => {
    this.timeinterval = setInterval(this.stopwatch, 1000)
  }
  onStop = () => {
    clearInterval(this.timeinterval)
  }
  onReset = () => {
    this.setState({timerange: 0})
    clearInterval(this.timeinterval)
  }
  
  renderMin = () => {
    const {timerange} = this.state
    const minutes = Math.floor(timerange / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }
  render() {
    const time = `${this.renderMin()}:${this.renderSec()}`
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
        />
        <p className="heading">Timer</p>
        <h1>{time}</h1>
        <br />
        <button type="button" className="start-btn" onClick={this.onStart}>
          Start
        </button>
        <button type="button" className="stop-btn" onClick={this.onStop}>
          Stop
        </button>
        <button type="button" className="restart-btn" onClick={this.onReset}>
          Reset
        </button>
      </div>
    )
  }
}
export default StopWatch
