import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
      activeStars: 0,
      active1: '',
      active2: '',
      active3: '',
      active4: '',
      active5: ''
    }
  }

  click = (event) => {
    this.setState({
      activeStars: parseInt(event.target.id),
      clicked: true
    })
  }

  renderStars = () => {
    const stars = ["1","2","3","4","5"];
      return stars.map( (star, index) => 
      <span className={this.state.activeStars >= index + 1 ? "active" : '' } onClick={this.click}>*</span>)
  }

  render(){
      return (
        <div className="stars-div">
          {this.state.clicked === false ?
          <div>
            <span onClick={(event) => this.click(event)}>*</span>
            <span onClick={(event) => this.click(event)}>*</span>
            <span onClick={(event) => this.click(event)}>*</span>
            <span onClick={(event) => this.click(event)}>*</span>
            <span onClick={(event) => this.click(event)}>*</span>
            I will hide
          </div>
          :
          this.renderStars()
          }
          {/* {this.renderStars()} */}
          I will not hide
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
