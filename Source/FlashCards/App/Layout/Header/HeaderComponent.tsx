import * as React from "react";

//Components
import {LogoComponent} from "./LogoComponent";
import {NavigationComponent} from "../Navigation/NavigationComponent";
import {AuthenticationComponent} from "./AuthenticationComponent";

//Interfaces
import {Header} from "../Model";

//Misc
import {ColorPalette} from "../ColorPalette";


export class HeaderComponent extends React.Component<Header, {}> {


  render(): JSX.Element {
    var headerStyle: React.CSSProperties = {
      display: "flex",
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[1],
      backgroundColor: ColorPalette.primary,
      color: ColorPalette.lightTextPrimary
    };

    return (
      <header id="header" class="Header" style={headerStyle}>
        <LogoComponent {... this.props.logo}/>
        <NavigationComponent navigationItems={this.props.navigationItems } />
        <AuthenticationComponent {... this.props.authenticationProperties}/>
      </header>
    );
  }
};