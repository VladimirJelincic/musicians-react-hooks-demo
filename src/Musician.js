import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Musician extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      instrument: ''
    }
  }
  
  setName = e => {
    this.setState({ name: e.target.value });
  };

  setInstrument = e => {
    this.setState({ instrument: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { color: oldColor } = prevProps;
    const { color } = this.props;
    if (oldColor !== color) {
      console.log(`Color changed from ${oldColor} to ${color}`);
    }
  }

  componentWillUnmount() {
    console.log('Bye #', this.props.recordNo);
  }

  render() {
    const { color, recordNo } = this.props;
    return (
      <div className="form border border-primary  " style={{ padding: '5px' }}>
        <div style={{ textAlign: 'right', fontStyle: 'bold' }}>{recordNo}</div>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-lg-4 col-md-4 col-sm-4">
            Name
          </label>
          <input
            id="name"
            className="form-control col-lg-7 col-md-7 col-sm-7  "
            onChange={e => this.setName(e)}
            style={{ color }}
            value={this.state.name}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="instrument" className="col-lg-4 col-md-4 col-sm-4">
            Instrument
          </label>
          <select
            id="instrument"
            className="form-control col-lg-7 col-md-7 col-sm-7"
            onChange={e => this.setInstrument(e)}
            style={{ color }}
            value={this.state.instrument}
          >
            <option value="guitar">🎸 Guitar</option>
            <option value="bass">🎸 Bass </option>
            <option value="drums">🥁 Drums </option>
            <option value="vocals">🎤 Vocals </option>
          </select>
        </div>
      </div>
    );
  }
}
Musician.propTypes = {
  color: PropTypes.string,
  recordNo: PropTypes.number
};
