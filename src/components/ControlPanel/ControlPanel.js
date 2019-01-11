import React from 'react';

const ControlPanel = props => {
    return (
        <div className="ControlPanel">
            <form onSubmit={event => props.changeFieldSize(event)}>
                <label htmlFor="size">Размер поля:
                    <input type="text" id="size" className="size" placeholder="Default: 36"/></label>
                <button type="submit" className="btn-submit">Create new Table</button>
            </form>
            <button className="btn-reset" onClick={props.resetClicked}>Reset Table</button>
            <input type="checkbox" name="cellNumbers" className="cellNumbers" checked={props.showCellNumber} onChange={props.hideCellNumber} /> Show  Cell Numbers
            <p className="counter">Количество попыток: <b>{props.counter}</b></p>
            <p className="log">{props.isFound ? 'Вы обезвредили бомбу!' : 'Найти и обезвредить бомбу:'}</p>
        </div>
    );
};

export default ControlPanel;