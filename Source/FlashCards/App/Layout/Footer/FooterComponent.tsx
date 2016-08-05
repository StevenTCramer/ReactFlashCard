import * as React from "react";

//Components
import {CopyrightComponent} from "./CopyrightComponent";
import {NavigationComponent} from "../Navigation/NavigationComponent";
import {SocialComponent} from "./SocialComponent";

//Interfaces
import {Footer} from "../Model";

//Misc
import {ColorPalette} from "../ColorPalette";

export class FooterComponent extends React.Component<Footer, {}> {
  render(): JSX.Element {

    var footerStyle: React.CSSProperties = {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: ColorPalette.lightTextPrimary,
      background: ColorPalette.primary
      //border: "solid",
      //borderColor: "Gold",
    };

    return (
      <footer id="footer" class="footer" style={footerStyle}>
        <CopyrightComponent {... this.props.copyright}/>
        <NavigationComponent navigationItems={this.props.navigationItems}/>
        <SocialComponent {...this.props.social}/>
      </footer>
    );
  }
}
