import React from 'react'
import Square from 'components/Square'

export default class Board extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick (i) {
    const squares = this.state.squares.slice();
    if(this.calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare (i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} />
    );
  }

  render () {
    const winner = this.calculateWinner(this.state.squares);

    let status = winner ? `Winner ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>

        <style jsx>{`
          .status {
            margin-bottom: 10px;
          }

          .board-row:after {
            clear: both;
            content: "";
            display: table;
          }
        `}</style>
      </div>
    );
  }

  calculateWinner (squares_) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares_[a] && squares_[a] === squares_[b] && squares_[a] === squares_[c]) {
        return squares_[a];
      }
    }

    return null;
  }
}