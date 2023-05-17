import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// // example: 01
// function Clock() {
//   return (
//     <h1 className='heading'>
//       <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//     </h1>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Clock());

// // example: 02
// function Clock() {
//   return (
//     <h1 className='heading'>
//       <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//     </h1>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);

// // example: 03: sending props from external
// function Clock({ locale }) {
//   return (
//     <h1 className='heading'>
//       <span className='text'>Hello {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock locale='bn-BD' />);

// //example: 04: class component
// class Clock {
//   print() {
//     return (
//       <h1 className='heading'>
//         <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//       </h1>
//     );
//   }
// }

// const ClockComponent = new Clock();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ClockComponent.print());

// //example: 05: class component with react component
// class Clock extends React.Component {
//   render() {
//     return (
//       <h1 className='heading'>
//         <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
//       </h1>
//     );
//   }
// }

// const ClockComponent = new Clock();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);

//example: 05: class component with react component passing props to element
class Clock extends React.Component {
  render() {
    // here donot chenge any props value , otherwise this will go inside infinite loop
    return (
      <h1 className='heading'>
        <span className='text'>
          Hello {this.props.children}
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

const ClockComponent = new Clock();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock locale='bn-BD'>test</Clock>);
