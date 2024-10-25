import React from "react"
import createBoard from "./utils"
import Cell from "./Cell"

class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gameOver: false,
            win: false,
            board: createBoard(25, 1)
        }
    }
handleCellClick = (index)=>{

    let {
        board: board,
     } = this.state;

     if(!board[index].visible){board[index].visible= true;

   if(board[index].hasMine)
    setTimeout(() => {this.setState({
        gameOver: true
    });}, 2000);

     if(this.checkWinCondition(board))
        setTimeout(() => {this.setState({
            win: true
        });}, 1000);

    this.setState({board})

     }}
checkWinCondition(board) {
    return board.every(cell => cell.visible || cell.hasMine);
}

    render() {
        const {
            board: board,
            gameOver: youLost,
            win: youWon

        } = this.state
        
        return (<div className="center">
        
            {!youLost && !youWon && (
          
                    <div className="flex">
                      <div className="board">
                    {board.map((cell1) => (
                        <Cell key={cell1.index} cell={cell1} onClick={this.handleCellClick} />
                    ))}
                      </div>
                   </div>)}
                {youLost && <div className="center"><div className="winorloose"><h1>Game Over</h1></div></div>}
                {youWon && <div className="winorloose"><h1>You Win!</h1></div>}
            </div>
        );
    }
}

export default Board;
