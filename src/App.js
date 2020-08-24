import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
      activeStars: 0
    }
  }

  click = (event) => {
    this.setState({
      activeStars: parseInt(event.target.id),
      clicked: true
    })
  }

  render(){
      return (
        <div className="stars-div">
          {this.state.clicked === false ?
          <div>
            <span id="1" onClick={(event) => this.click(event)}>*</span>
            <span id="2" onClick={(event) => this.click(event)}>*</span>
            <span id="3" onClick={(event) => this.click(event)}>*</span>
            <span id="4" onClick={(event) => this.click(event)}>*</span>
            <span id="5" onClick={(event) => this.click(event)}>*</span>
          </div>
          :
          null
          }
        </div>
      // :
      // null
      // }
      // {this.state.clicked === false ? 
      //   <div>

      //   </div>
      //   : 
      //   null}
    )
  }
}

// {this.state.email === "nofacialrec@demo.com" && this.state.password === "demo" ? 
// <div>
//     <Form onSubmit={this.handleLoginSubmit}>
//         <Button type="submit">Login</Button>
//     </Form>
// </div>
// : 
// <Button type="submit">Move on to facial recognition</Button>
// }

export default App;
