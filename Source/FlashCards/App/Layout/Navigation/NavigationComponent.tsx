import * as React from "react";

//Components
import {NavigationItemComponent} from "./NavigationItemComponent";

//Interfaces
import {NavigationMenu, NavigationItem} from "../Model";

//Misc
import {ColorPalette} from "../ColorPalette";

export class NavigationComponent extends React.Component<NavigationMenu, {}> {

  renderNavigationItem = (aNavigationItem: NavigationItem) => {
    return (
      <NavigationItemComponent {...aNavigationItem} key={aNavigationItem.index}/>
    );
  };

  render(): JSX.Element {
    var navigationStyle: React.CSSProperties = {
      //display: "flex",
      //flexDirection: "row",
      //alignItems: "center",
      //justifyContent: "space-between",
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[2],
      padding: 0,
      margin: 0
    };

    return (
      <div id="tft-navigation" class="navigation" style={navigationStyle}>
        <ul style= {{ listStyle: "none", margin: 0, padding: 0}}>
          {this.props.navigationItems.map(this.renderNavigationItem) }
        </ul>
      </div>
    );
  }
}
