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

  redirect = () => {
    console.log('코나미 커맨드 활성화')
  }

  appKeyPress = (e) => {
    if (e.key === 'upArrow')
      this.redirect()
  }

  render() {
    const { clicked } = this.state
    const { ftselec, appKeyPress } = this
    return (
      <div className="center">
        <div className="welcome" onKeyPress={appKeyPress}>
          <h1 className="main__text">Six Nerds WebPage</h1>
          <input type="button" id="btn1" value="이게 뭐죠?" onClick={ftselec} />
          {clicked ? <Sorry /> : " "}
        </div>
      </div>
    )
  }
}
