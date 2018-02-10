import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      className: "square"
    };
  }

  handleClick(i) {
    this.setState({
      selected: !this.state.selected,
      className: !this.state.selected ? "square isSelected" : "square" 
    });
  }

  render() {
    return (
      <button className={this.state.className}  selected={this.state.selected} onClick={() => this.handleClick()}></button>
    );
  }
}

class Row extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    // return <Square />;
    return ( 
      <Square /> 
    );
  }

  render() {

    return (
      <div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Pattern extends React.Component {
  render() {
    return (
      <div className="pattern">
        <Row />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Pattern />,
  document.getElementById('root')
);
