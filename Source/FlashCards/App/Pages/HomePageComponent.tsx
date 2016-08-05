import * as React from "react";

//Components
import {FlashCardApplicationComponent} from "../FlashCardApplicationComponent";

//Misc
import {ColorPalette} from "../Layout/ColorPalette";

export class HomePageComponent extends React.Component<{}, {}> {
  render(): JSX.Element {
    var homePageStyle: React.CSSProperties = {
      position: "relative",
      display: "block",
      flex:1,
      //width: "100%",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "auto",
      overflowY: "auto"
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[1],
      //padding: 0,
      //margin: 0
    };

    
    return (

      <main style={homePageStyle}>
        <FlashCardApplicationComponent/>
      </main>
    );
  }
}
