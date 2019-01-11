import React from 'react';

const Field = props => {
    return (
        <div className="Field" style={{width: parseInt(Math.sqrt(props.field.length)) * 50 + 2}}>
            {
                props.field.map((cell, index) => {
                return <div className={'cell ' + cell.status} key={index} onClick={() => props.openCell(index)}>{props.showCellNumber ? index+1 : null}</div>
                })
            }
            <div className="clear"> </div>
        </div>
    );
};

export default Field;