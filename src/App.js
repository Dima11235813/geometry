import React, { Component } from 'react';
import ExpandingCircle from './components/ExpandingCircle'

class App extends Component {
  constructor(){
    super()
    const seedSizeOfCircle = 50
    this.state = {
      circles: new Array(50).fill(true),
      containerStyles: {
        backgroundColor: "grey",
        height: "100vh",
        width: "100vw",
        display: 'grid',
        gridTemplateColumns: 'repeat(10 , 10%)',
        gridTemplateRows: 'auto',
        justifyItems: "center",
        alignItems: "center"
      },
      sizeOfCircle: seedSizeOfCircle
    }
  }
  changeSizeOfCircle = (context) => {
    context.setState({
      sizeOfCircle: context.state.sizeOfCircle + 1
    })
  }
  componentDidMount = () => {
    setInterval(this.changeSizeOfCircle,1000, this)
  }
  render() {
    const {
      circles,
      sizeOfCircle,
      containerStyles
    } = this.state
    return (
      <div>
        <header>
        </header>
        <div style={containerStyles}>
          {
            circles.map((item, index) => {
              return (
<ExpandingCircle 
  sizeOfCircle={sizeOfCircle}
  key={index} 
  />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
