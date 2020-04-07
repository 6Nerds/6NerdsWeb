import React from 'react';
import Sorry from './Sorry';
import './App.css'

export default class App extends React.Component {
  state = {
    clicked: false
  }

  ftselec = () => {
    if (this.state.clicked === true) {
      this.setState({
        clicked: false
      })
    } else {
      this.setState({
        clicked: true
      })
    }
  }

  render() {
    const { clicked } = this.state
    const ftselec = this.ftselec
    return (
      <div className="welcome">
        <h1 className="main__text">Six Nerds WebPage</h1>
        <input type="button" className="btn" value="이게 뭐죠?" onClick={ftselec} />
        { clicked ? <Sorry /> : " "}
      </div>
    )
  }
}

//ctrl+k => ctrl+f
//폰트 뭐씁니까 consolas?