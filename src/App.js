import React, { Component } from 'react';

import Musician from './Musician';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      musicians: [1],
      maxNumber: 1,
      color: '#000000'
    };
  }
  
  add = () => {
    const { musicians, maxNumber } = this.state;
    const max = maxNumber >= musicians.length + 1 ? maxNumber : musicians.length + 1;

    this.setState({ musicians: [...musicians, max], maxNumber: max + 1 });
  };
  remove = personId => {
    const { musicians } = this.state;
    this.setState({ musicians: [...musicians.filter(p => p !== personId)] });
  };
  render() {
    return (
      <div >
        <h2>Classic App</h2>
        <input type="color" onChange={e => this.setState({ color: e.target.value })} />
        <button onClick={() => this.add()}>+</button>
        <br />
        {this.state.musicians.map((personId, i) => {
          return (
            <div key={personId}>
              <Musician recordNo={personId} color={this.state.color} />
              <button onClick={() => this.remove(personId)}> -</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
