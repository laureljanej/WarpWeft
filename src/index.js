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
        </div>
      </div>
    );
  }
}

class Pattern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: Array(2).fill(null),
      columns: Array(6).fill(null),
    };
  }

  renderRow() {
    return ( 
      <Row columns={this.state.columns}/> 
    );
  }

  renderRows(rows) {
    return ( 
      rows.map(this.renderRow)
    );
  }

  render() {
    return (
      <div className="pattern">
        {this.renderRows(this.state.rows)}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Pattern />,
  document.getElementById('root')
);
