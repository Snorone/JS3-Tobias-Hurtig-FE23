import React from 'react';

const Cell = ({ 
    cell: theCell, 
    onClick: click
     }) => {
    const handleClick = () => {
        if (!theCell.visible) {
            click(theCell.index);
            console.log(theCell.index)
        }
    };

    return (
        <div className="cell" onClick={handleClick}>
            {theCell.visible && theCell.hasMine ? '💣' : theCell.visible && theCell.numberOfNeighbouringMines >= 0 ? theCell.numberOfNeighbouringMines : ''}
        </div>
    );
};

export default Cell;
