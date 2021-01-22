import React, { Component } from 'react';
import pawnIcon from './media/piece/pawn_icon.png';
import pawnMove from './media/piece/pawn_move.png';
import lanceIcon from './media/piece/lance_icon.png';
import lanceMove from './media/piece/lance_move.png';
import knightIcon from './media/piece/knight_icon.png';
import knightMove from './media/piece/knight_move.png';
import silverGeneralIcon from './media/piece/silver_general_icon.png';
import silverGeneralMove from './media/piece/silver_general_move.png';
import goldGeneralIcon from './media/piece/gold_general_icon.png';
import goldGeneralMove from './media/piece/gold_general_move.png';
import bishopIcon from './media/piece/bishop_icon.png';
import bishopMove from './media/piece/bishop_move.png';
import rookIcon from './media/piece/rook_icon.png';
import rookMove from './media/piece/rook_move.png';
import kingIcon from './media/piece/king_icon.png';
import kingMove from './media/piece/king_move.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pieceIndex: 0 };
  }

  piece_types = [
    {
      name: 'Pawn',
      desc: 'A pawn (歩) moves one square straight forward. It cannot retreat. Unlike international chess pawns, shogi pawns capture the same as they move. A pawn must promote if it arrives at the furthest rank. In practice, however, a pawn is usually promoted whenever possible. There are two restrictions on where a pawn may be dropped.',
      icon: pawnIcon,
      move: pawnMove,
    },
    {
      name: 'Lance',
      desc: 'moves just like the rook except it cannot move backwards or to the sides. It is often useful to leave a lance unpromoted at the far side of the board. A lance must promote, however, if it reaches the furthest rank.',
      icon: lanceIcon,
      move: lanceMove,
    },
    {
      name: 'Knight',
      desc: 'jumps at an angle intermediate to orthogonal and diagonal, amounting to one square straight forward plus one square diagonally forward, in a single move. Unlike international chess knights, shogi knights cannot move to the sides or in a backwards direction. The knight is the only piece that ignores intervening pieces on the way to its destination. It is not blocked from moving if the square in front of it is occupied, but neither can it capture a piece on that square. It is often useful to leave a knight unpromoted at the far side of the board. A knight must promote, however, if it reaches either of the two furthest ranks.',
      icon: knightIcon,
      move: knightMove,
    },
    {
      name: 'Silver general',
      desc: 'A silver general (銀) moves one square diagonally, or one square straight forward, giving it five possible destinations. Because an unpromoted silver can retreat more easily than a promoted one, it is common to leave a silver unpromoted at the far side of the board.',
      icon: silverGeneralIcon,
      move: silverGeneralMove,
    },
    {
      name: 'Gold general',
      desc: 'A gold general (金) moves one square orthogonally, or one square diagonally forward, giving it six possible destinations. It cannot move diagonally backwards.',
      icon: goldGeneralIcon,
      move: goldGeneralMove,
    },
    {
      name: 'Bishop',
      desc: 'A bishop (角) moves any number of squares in a diagonal direction. Because they cannot move orthogonally, the players\' unpromoted bishops can reach only half the squares of the board, unless one is captured and then dropped.',
      icon: bishopIcon,
      move: bishopMove,
    },
    {
      name: 'Rook',
      desc: 'A rook (飛) moves any number of squares in an orthogonal direction.',
      icon: rookIcon,
      move: rookMove,
    },
    {
      name: 'King',
      desc: 'A king (玉/王) moves one square in any direction, orthogonal or diagonal.',
      icon: kingIcon,
      move: kingMove,
    }
  ];

  state = {
    pieceType: 'Pawn' | 'Lance',
  }

  render() {
    const pieceType = this.piece_types[this.state.pieceIndex];
    return (
      <div className="App">
        <div className="App-navi">
          <button
            className="App-navi-button"
            disabled={this.state.pieceIndex - 1 < 0}
            onClick={() => {
              const { pieceIndex } = this.state;
              this.setState({ pieceIndex: pieceIndex - 1 });
            }}
          >
            Prev
          </button>
          <button
            className="App-navi-button"
            disabled={this.state.pieceIndex + 1 >= this.piece_types.length}
            onClick={() => {
              const { pieceIndex } = this.state;
              this.setState({ pieceIndex: pieceIndex + 1 });
            }}
          >
            Next
          </button>
        </div>
        <div className="App-content">
          <h2>{pieceType.name}</h2>
          <img className="App-content-icon" src={pieceType.icon} alt="Icon" />
          <p>{pieceType.desc}
          </p>
          <img className="App-content-move" src={pieceType.move} alt="Icon" />
        </div>
      </div >
    );
  }
}

export default App;
