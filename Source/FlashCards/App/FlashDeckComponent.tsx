import * as React from "react";
import { FlashCardComponent } from "./FlashCardComponent";


interface FlashDeckState {
  index: number;
}

export class FlashDeckComponent extends React.Component<FlashDeck, FlashDeckState> {

  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  get currentFlashCard(): FlashCard {
    return (this.props.flashCards[this.state.index]);
  }

  next = () => {
    if (this.state.index < this.props.flashCards.length - 1) {
      this.state.index++;
      this.setState(this.state);
    }
  };

  previous = () => {
    if (this.state.index !== 0) {
      this.state.index--;
      this.setState(this.state);
    }
  };

  nextButtonEnabled = (): boolean => {
    return (this.state.index < this.props.flashCards.length - 1);
  };

  previousButtonEnabled = (): boolean => {
    return (this.state.index !== 0);
  };

  render(): JSX.Element {
    var divStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "Yellow",
      padding: "5px",
      //zIndex: 15
    };

    var output: JSX.Element;

    if (this.props.flashCards && this.props.flashCards.length > 0) {
      output = <div style={divStyle}>
        <h1>Card {this.state.index + 1} of {this.props.flashCards.length}</h1>
        <FlashCardComponent {...this.currentFlashCard}/>
        <button onClick={this.previous} disabled={!this.previousButtonEnabled() }>Previous</button>
        <button onClick={this.next} disabled={!this.nextButtonEnabled() }>Next</button>
      </div>;
    } else {
      output = <div style={divStyle}>
        No flash cards in Deck!
      </div>;
    }

    return (
      <div style={divStyle}>
        {output}
      </div>
    );
  }
}