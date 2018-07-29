import React from 'react'
import Board from 'components/Board'

export default class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>

        <style jsx>{`
          .game {
            display: flex;
            flex-direction: row;
          }
          
          .game-info {
            margin-left: 20px;
          }
        `}</style>

        <style jsx global>{`
          kbd-navigation {
            background: #ddd;
          }
        `}</style>
      </div>
    );
  };
}