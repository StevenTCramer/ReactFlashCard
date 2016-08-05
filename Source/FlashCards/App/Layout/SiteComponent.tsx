/// <reference path="sectioncomponent.tsx" />
import * as React from "react";

//Components
import {HeaderComponent} from "./Header/HeaderComponent";
import {FooterComponent} from "./Footer/FooterComponent";
import {ColorPalette} from "./ColorPalette";

//Interfaces
import {Site} from "./Model";

export class SiteComponent extends React.Component<Site, {}> {

  render(): JSX.Element {
    var siteStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[0],
    };

    return (
      <div style={siteStyle} >
        <HeaderComponent {... this.props.header} />
        {this.props.currentPage}
        <FooterComponent  {... this.props.footer} />
      </div>
    );
  }
}
