import React from 'react'

export default class Square extends React.Component {
  render () {
    return (
      <button 
        className="square"
        onClick={() => this.props.onClick()} >

        {this.props.value}

        <style jsx>{`
          .square {
            background: #fff;
            border: 1px solid #999;
            float: left;
            font-size: 24px;
            font-weight: bold;
            line-height: 34px;
            height: 34px;
            margin-right: -1px;
            margin-top: -1px;
            padding: 0;
            text-align: center;
            width: 34px;
          }

          .square:focus {
            outline: none;
            background: #ddd;
          }
        `}</style>   
      </button>
    );
  }
}