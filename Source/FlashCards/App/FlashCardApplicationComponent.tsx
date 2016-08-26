import * as React from "react";

//Components
import {FlashDeckComponent} from "./FlashDeckComponent";

//Interfaces

//Misc
//import {ColorPalette} from "./ColorPalette";

export class FlashCardApplicationComponent extends React.Component<{}, FlashCardApplication> {
  thaiFlashDeck: FlashDeck;

  XmlHttpRequest: XMLHttpRequest;

  constructor() {
    super();
    this.state = {
      name: "",
      factoidCategories: [],
      flashCardPlayerOptionsList: [],
      flashDecks: [],
      guid: ""
    };
  }

  componentDidMount = (): void => {
    this.getData();
  };

  componentWillUnmount = (): void => {
    this.XmlHttpRequest.abort();
  };


  render(): JSX.Element {
    var divStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      background: "pink"
    };

    var flashDeck: FlashDeck = this.state.flashDecks[0];

    return (
      <div style={divStyle}>
        <FlashDeckComponent {...this.state.flashDecks[0]}/>
        Number of decks {this.state.flashDecks.length}
      </div>
    );
  }

  getData = (): void => {
    this.XmlHttpRequest = new XMLHttpRequest();
    this.XmlHttpRequest.open("GET", encodeURI("/FlashCardApplication/FlashCardApplicationFeature"));
    this.XmlHttpRequest.onload = this.processData;
    this.XmlHttpRequest.send();
  };

  processData = (): void => {
    if (this.XmlHttpRequest.status === 200) {
      var data: any = JSON.parse(this.XmlHttpRequest.responseText);
      this.setState(data);
    } else {
      alert("Request failed.  Returned status of " + this.XmlHttpRequest.status);
    }
  };
}
