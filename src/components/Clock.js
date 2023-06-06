import React from 'react';
import Button from './Button';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: 'bn-BD' };
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

  handleClick = (locale) => {
    // e.preventDefault(); // for stopping reload the page.
    // console.log('The button was clicked');
    this.setState({
      locale: locale,
    });
  };

  //   // example 01:
  //   render() {
  //     // here donot chenge any props value , otherwise this will go inside infinite loop
  //     const { date, locale } = this.state;
  //     let button;
  //     if (locale === 'bn-BD') {
  //       button = (
  //         <Button change={this.handleClick} locale='en-US'>
  //           Click Here
  //         </Button>
  //       );
  //     } else {
  //       button = (
  //         <Button change={this.handleClick} locale='bn-BD'>
  //           Click Here
  //         </Button>
  //       );
  //     }
  //     return (
  //       <div>
  //         <h1 className='heading'>
  //           <span className='text'>{date.toLocaleTimeString(locale)}</span>
  //         </h1>
  //         {button}
  //       </div>
  //     );
  //   }
  // }

  //   // example 02:
  //   render() {
  //     // here donot chenge any props value , otherwise this will go inside infinite loop
  //     const { date, locale } = this.state;
  //     let button;
  //     return (
  //       <div>
  //         <h1 className='heading'>
  //           <span className='text'>{date.toLocaleTimeString(locale)}</span>
  //         </h1>
  //         {locale === 'bn-BD' ? (
  //           <Button change={this.handleClick} locale='en-US' show={false} />
  //         ) : (
  //           <Button change={this.handleClick} locale='bn-BD' show />
  //         )}
  //       </div>
  //     );
  //   }
  // }

  // example 03:
  render() {
    // here donot chenge any props value , otherwise this will go inside infinite loop
    const { date, locale } = this.state;
    let button;
    return (
      <div>
        <h1 className='heading'>
          <span className='text'>{date.toLocaleTimeString(locale)}</span>
        </h1>
        {locale === 'bn-BD' ? (
          <Button change={this.handleClick} locale='en-US' show={false} enable={false} />
        ) : (
          <Button change={this.handleClick} locale='bn-BD' show />
        )}
      </div>
    );
  }
}

export default Clock;
