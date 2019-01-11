import React, { Component } from 'react';
import './App.css';
import FieldBuilder from "./components/Field/FieldBuilder";
import Field from "./components/Field/Field";
import ControlPanel from "./components/ControlPanel/ControlPanel";

class App extends Component {
    state = {
        field: [],
        fieldSize: 36,
        target: null,
        counter: 0,
        isFound: false,
        showCellNumber: true
    };

    componentDidMount() {
        this.initGame(36);
    }

    initGame = size => {
        const field = new FieldBuilder(size);
        const target = field.plantBomb();
        this.setState({
            isFound: false,
            field: field.new,
            target,
            counter: 0
        });
    };

    openCell = index => {
        if (!this.state.isFound) {
            const field = this.state.field;

            if (!field[index].isClicked) {
                field[index].isClicked = true;
                field[index].status = 'opened';
                if (index === this.state.target) {
                    this.setState({ isFound: !this.state.isFound });
                    field[index].status = 'opened target';
                } else {
                    this.setState({counter: this.state.counter+1});
                }
                this.setState({field});
            }
        } else {
            alert('Вы уже обезвредили, Игра окончена.');
        }
    };

    changeFieldSize = event => {
        event.preventDefault();
        let size = parseInt(document.getElementById("size").value);
        if (!isNaN(size)) {
            this.initGame(size);
            this.setState({fieldSize: size});
        }
    };


  render() {
    return (
      <div className="App">
          <ControlPanel
              changeFieldSize = {this.changeFieldSize}
              resetClicked = {() => this.initGame(this.state.fieldSize)}
              showCellNumber = {this.state.showCellNumber}
              hideCellNumber = {() => this.setState({showCellNumber: !this.state.showCellNumber})}
              counter = {this.state.counter}
              isFound = {this.state.isFound}
          />
          <Field
            field = {this.state.field}
            showCellNumber = {this.state.showCellNumber}
            openCell = {this.openCell}
          />
      </div>
    );
  }
}

export default App;
