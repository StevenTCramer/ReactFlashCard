import * as React from "react";

//Interfaces
import {NavigationItem} from "../Model";

//Misc
import {ColorPalette} from "../ColorPalette";

export class NavigationItemComponent extends React.Component<NavigationItem, {}> {
  render(): JSX.Element {
    var navigationItemStyle: React.CSSProperties = {
      //color: ColorPalette.lightTextPrimary
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[3]
    };

    var linkStyle: React.CSSProperties = {
      color: ColorPalette.lightTextPrimary
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[3]
    };

    return (
      <li class="navigationItem" style={navigationItemStyle}>
        <a href={this.props.url} style={linkStyle}>{this.props.name}</a>
      </li>
    );
  }
}
