import React from 'react';

export class Header extends React.Component {
  render() {
  return (
    <div className='header'>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="dropdown">
          <h1 className="navbar-brand">
            COVID-19 Dashboard
          </h1>  
        </div>
        <div>
          <p>
          TOTAL CASES
          </p>
        </div>
      </div>
    </div>
  );}
};