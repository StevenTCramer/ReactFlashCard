import * as React from "react";

//Interfaces
import {Logo} from "../Model";

//Misc
import {ColorPalette} from "../ColorPalette";

export class LogoComponent extends React.Component<Logo, {}> {
  render(): JSX.Element {
    var logoSectionStyle: React.CSSProperties = {
      //display: "flex",
      //flexDirection: "row",
      //alignItems: "center",
      //justifyContent: "space-between",
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[2]
    };

    return (
      <div id="logo" class="logo" style={logoSectionStyle}>
        <image src={this.props.url} alt={this.props.name}/>
        The Freeze Team Logo goes here
      </div>
    );
  }
}
