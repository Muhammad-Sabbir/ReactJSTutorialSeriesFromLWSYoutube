import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tik();
    }, 1000);
  }
  tik() {
    this.setState({ date: new Date() }); //  // if we want to initialize a state then we must call setState() method, because react can only understand the setState to initilize. Do not use this.state.date = new Date(); for initializing the state
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    // here donot chenge any props value , otherwise this will go inside infinite loop
    return (
      <h1 className='heading'>
        <span className='text'>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

export default Clock;
